from flask import Flask, request, jsonify
import os
import time

app = Flask(__name__)
UPLOAD_FOLDER = "./received_images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    category = request.form.get("category", "Unknown")
    image = request.files['image']
    
    # 生成文件名并保存
    filename = f"{category}_{int(time.time())}.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    image.save(filepath)
    
    print(f"Received image: {filepath}, category: {category}")
    
    return jsonify({"message": "Image received", "category": category}), 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)