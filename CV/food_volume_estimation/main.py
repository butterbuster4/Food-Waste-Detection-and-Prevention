import sys
import json
import os
import requests
import subprocess
import tensorflow as tf
from keras import backend as K
from flask import Flask, request, jsonify
from keras.models import Model, model_from_json
from food_volume_estimation.volume_estimator import VolumeEstimator
from food_volume_estimation.depth_estimation.custom_modules import *
from food_volume_estimation.food_segmentation.food_segmentator import FoodSegmentator
from pyntcloud import PyntCloud
from fatsecret import Fatsecret

app = Flask(__name__)

# Paths to model architecture/weights
depth_model_architecture = './models/monovideo_fine_tune_food_videos.json'
depth_model_weights = './models/monovideo_fine_tune_food_videos.h5'
segmentation_model_weights = './models/mask_rcnn_food_segmentation.h5'

# Initialize VolumeEstimator
def load_volume_estimator():
    global estimator, graph, session
    estimator = VolumeEstimator(arg_init=False)

    with open(depth_model_architecture, 'r') as read_file:
        custom_losses = Losses()
        objs = {'ProjectionLayer': ProjectionLayer,
                'ReflectionPadding2D': ReflectionPadding2D,
                'InverseDepthNormalization': InverseDepthNormalization,
                'AugmentationLayer': AugmentationLayer,
                'compute_source_loss': custom_losses.compute_source_loss}
        model_architecture_json = json.load(read_file)
        
        graph = tf.Graph()
        with graph.as_default():
            session = tf.Session(graph=graph)
            with session.as_default():
                estimator.monovideo = model_from_json(model_architecture_json, custom_objects=objs)
                estimator._VolumeEstimator__set_weights_trainable(estimator.monovideo, False)
                estimator.monovideo.load_weights(depth_model_weights)
                estimator.model_input_shape = estimator.monovideo.inputs[0].shape.as_list()[1:]
                
                depth_net = estimator.monovideo.get_layer('depth_net')
                estimator.depth_model = Model(inputs=depth_net.inputs, outputs=depth_net.outputs, name='depth_model')
                
                estimator.segmentator = FoodSegmentator(segmentation_model_weights)
    

    estimator.min_disp = 1 / 10  # MIN_DEPTH = 0.01
    estimator.max_disp = 1 / 0.01  # MAX_DEPTH = 10
    estimator.gt_depth_scale = 0.35
    estimator.relax_param = 0.01

# Calculate food volume
def volume_estimation(input_image):
    global estimator, graph, session
    plate_diameter = 0
    volume_sum = 0.0
    
    with graph.as_default():
        with session.as_default():
            K.set_session(session)
            outputs_list = estimator.estimate_volume(input_image, fov=70, plate_diameter_prior=plate_diameter, plot_results=True)

    for outputs in outputs_list:
        estimated_volume, *_ = outputs
        volume_sum += estimated_volume
    return volume_sum

# Calculate food weight
def weight_calculation(volume):
    density = 0.89
    offset = 0.6
    food_weight = volume * density * offset * 1000000  # 体积转换为重量
    return food_weight

# 获取 FatSecret 访问 Token
def initialize_subprocess():
    command = "curl"
    args = [
        '-u', 'd5bf3d1b66424230bb18794248e9f0e8:42e9b01a5501471e801da90a78d10f68',
        '-d', 'grant_type=client_credentials&scope=basic',
        '-X', 'POST',
        'https://oauth.fatsecret.com/connect/token'
    ]

    try:
        result = subprocess.run([command] + args, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        output = result.stdout.decode('utf-8')
        token = json.loads(output).get("access_token", None)
        return token
    except subprocess.CalledProcessError as e:
        print("Error:", e)
        return None

# 获取食物 ID
def get_foodID(food_type):
    fs = Fatsecret("d5bf3d1b66424230bb18794248e9f0e8", "422cea215aa44de2aa3730335c8e1759")
    foods = fs.foods_search(food_type)
    return foods[0]["food_id"]

# 获取营养信息
def getNutrition(food_id, access_token):
    url = "https://platform.fatsecret.com/rest/food/v4"
    params = {'food_id': food_id, 'format': 'json'}
    headers = {'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'}
    response = requests.get(url, headers=headers, params=params)
    return response.json() if response.status_code == 200 else None

# 解析营养信息
def getNutritionDict(data, weight):
    if data:
        serving = data['food']['servings']['serving'][0]
        factor = weight / float(serving['metric_serving_amount'])
        return {
            "calories": float(serving.get('calories', 0.0)) * factor,
            "carbohydrate": float(serving.get('carbohydrate', 0.0)) * factor,
            "protein": float(serving.get('protein', 0.0)) * factor,
            "fat": float(serving.get('fat', 0.0)) * factor,
            "fiber": float(serving.get('fiber', 0.0)) * factor,
            "sugar": float(serving.get('sugar', 0.0)) * factor,
            "vitamin_a": float(serving.get('vitamin_a', 0.0)) * factor,
            "vitamin_c": float(serving.get('vitamin_c', 0.0)) * factor
        }
    return None

# **Flask API**：接收 food_category 和 image
@app.route('/process', methods=['POST'])
def upload():
    if "image" not in request.files or "food_category" not in request.form:
        return jsonify({"error": "Missing image or food category"}), 400

    image_file = request.files["image"]
    food_category = request.form["food_category"]

    upload_dir = "./uploads"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    image_path = os.path.join(upload_dir, "input.jpg")
    image_file.save(image_path)
    
    with graph.as_default():
        with session.as_default():
            K.set_session(session)
            volume = volume_estimation(image_path)
            weight = weight_calculation(volume)

    # 获取食物 ID 并查询营养信息
    access_token = initialize_subprocess()
    food_id = get_foodID(food_category)
    nutrition_data = getNutrition(food_id, access_token)
    nutrition_info = getNutritionDict(nutrition_data, weight)

    return jsonify({
        "food_category": food_category,
        "weight": weight,
        "nutrition": nutrition_info
    })

if __name__ == "__main__":
    load_volume_estimator()
    app.run(host="0.0.0.0", port=5000)