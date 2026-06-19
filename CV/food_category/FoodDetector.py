import os
import sys
import cv2
import numpy as np
import time
import requests
import mysql.connector
from keras.models import load_model
from ultralytics import YOLO
from collections import deque

class FoodDetector:
    def __init__(self, db_host, db_port, db_user, db_password, db_name):
        # Load models
        base_path = os.path.dirname(__file__)
        detection_model_path = os.path.join(base_path, 'models', 'detection.pt')
        classification_model_path = os.path.join(base_path, 'models', 'classification.keras')
        
        self.detection_model = YOLO(detection_model_path)
        self.detection_model.overrides['conf'] = 0.5  # Confidence threshold
        self.detection_model.overrides['iou'] = 0.5   # IoU threshold
        self.classification_model = load_model(classification_model_path)

        # Object tracking
        self.BUFFER_SIZE = 5  # Requires 5 consecutive frames to classify
        self.IOU_THRESHOLD = 0.8  # Threshold to determine if a bounding box is stable
        self.trackers = {}  # Object ID -> (coordinates, frame count, stable, accumulated frames, lost frames)

        # Food categories
        self.classification_labels = ["Apple pie", "Baby back ribs", "Baklava", "Beef carpaccio", "Beef tartare", "Beet salad", 
            "Beignets", "Bibimbap", "Bread pudding", "Breakfast burrito", "Bruschetta", "Caesar salad", "Cannoli", "Caprese salad", 
            "Carrot cake", "Ceviche", "Cheesecake", "Cheese plate", "Chicken curry", "Chicken quesadilla", "Chicken wings", 
            "Chocolate cake", "Chocolate mousse", "Churros", "Clam chowder", "Club sandwich", "Crab cakes", "Creme brulee", 
            "Croque madame", "Cup cakes", "Deviled eggs", "Donuts", "Dumplings", "Edamame", "Eggs benedict", "Escargots", 
            "Falafel", "Filet mignon", "Fish and chips", "Foie gras", "French fries", "French onion soup", "French toast", 
            "Fried calamari", "Fried rice", "Frozen yogurt", "Garlic bread", "Gnocchi", "Greek salad", "Grilled cheese sandwich", 
            "Grilled salmon", "Guacamole", "Gyoza", "Hamburger", "Hot and sour soup", "Hot dog", "Huevos rancheros", "Hummus", 
            "Ice cream", "Lasagna", "Lobster bisque", "Lobster roll sandwich", "Macaroni and cheese", "Macarons", "Miso soup", 
            "Mussels", "Nachos", "Omelette", "Onion rings", "Oysters", "Pad thai", "Paella", "Pancakes", "Panna cotta", 
            "Peking duck", "Pho", "Pizza", "Pork chop", "Poutine", "Prime rib", "Pulled pork sandwich", "Ramen", "Ravioli", 
            "Red velvet cake", "Risotto", "Samosa", "Sashimi", "Scallops", "Seaweed salad", "Shrimp and grits", 
            "Spaghetti bolognese", "Spaghetti carbonara", "Spring rolls", "Steak", "Strawberry shortcake", "Sushi", "Tacos", 
            "Takoyaki", "Tiramisu", "Tuna tartare", "Waffles"]

        # MySQL connection
        self.db_connection = mysql.connector.connect(
            host=db_host,
            port=db_port,
            user=db_user,
            password=db_password,
            database=db_name
        )
        self.db_cursor = self.db_connection.cursor()

    def preprocess_image(self, img, target_size=640):
        """Preprocess input for the classification model"""
        img_resized = cv2.resize(img, (target_size, target_size))
        img_normalized = img_resized / 255.0
        img_normalized = (img_normalized - 0.5) / 0.5
        return np.expand_dims(img_normalized, axis=0)

    def iou(self, boxA, boxB):
        """Calculate Intersection over Union (IoU) between two bounding boxes"""
        xA = max(boxA[0], boxB[0])
        yA = max(boxA[1], boxB[1])
        xB = min(boxA[2], boxB[2])
        yB = min(boxA[3], boxB[3])

        interArea = max(0, xB - xA) * max(0, yB - yA)
        boxAArea = (boxA[2] - boxA[0]) * (boxA[3] - boxA[1])
        boxBArea = (boxB[2] - boxB[0]) * (boxB[3] - boxB[1])

        return interArea / float(boxAArea + boxBArea - interArea)

    def process_frame(self, frame):
        """Detect food and classify it"""
        results = self.detection_model(frame, stream=True, verbose=False)
        detected_objects = {}  # Store detected objects in the current frame

        for result in results:
            for box in result.boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                confidence = box.conf.item()
                if confidence < 0.5:
                    continue

                # Match detected objects with tracked objects
                best_match_id = None
                best_iou = 0
                for obj_id, (prev_box, count, stable, buffer, lost_frames) in self.trackers.items():
                    iou_score = self.iou((x1, y1, x2, y2), prev_box)
                    if iou_score > best_iou and iou_score > self.IOU_THRESHOLD:
                        best_iou = iou_score
                        best_match_id = obj_id

                if best_match_id is not None:
                    count, stable, buffer, lost_frames = self.trackers[best_match_id][1:]
                    count += 1
                    lost_frames = 0
                    if count >= self.BUFFER_SIZE:
                        stable = True  # Mark as stable after 5 frames
                else:
                    best_match_id = len(self.trackers) + 1
                    count, stable, buffer, lost_frames = 1, False, deque(maxlen=self.BUFFER_SIZE), 0

                detected_objects[best_match_id] = ((x1, y1, x2, y2), count, stable, buffer, lost_frames)

                final_category = "Unknown"  # Default category
                if stable and len(buffer) < self.BUFFER_SIZE:
                    cropped_img = frame[y1:y2, x1:x2]
                    if cropped_img.size == 0:
                        continue
                    preprocessed_img = self.preprocess_image(cropped_img)
                    predictions = self.classification_model.predict(preprocessed_img, verbose=0)
                    predicted_class = np.argmax(predictions[0])
                    category = self.classification_labels[predicted_class]
                    buffer.append(category)

                    if len(buffer) == self.BUFFER_SIZE:
                        final_category = max(set(buffer), key=buffer.count)
                        # Send image and category to Program 2
                        _, img_encoded = cv2.imencode('.jpg', cropped_img)
                        try:
                            response = requests.post(
                                "http://localhost:5000/process",
                                files={"image": ("image.jpg", img_encoded.tobytes(), "image/jpeg")},
                                data={"food_category": final_category},
                                timeout=100
                            )
                            print("Sent to Program 2:", response.status_code, file=sys.stdout)
                            
                            # Print responses from Program 2
                            if response.status_code == 200:
                                print("Program 2 response:", response.json(), file=sys.stdout)
                                # Store result in MySQL database
                                self.store_result_in_db(final_category, response.json())
                            else:
                                print("Error:", response.status_code, file=sys.stdout)
                        except requests.exceptions.RequestException as e:
                            print("Error sending image:", e)

                # Draw bounding box
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

        self.trackers = detected_objects
        return frame

    def store_result_in_db(self, category, response_data):
        """Store the result in MySQL database"""
        try:
            query = """
            INSERT INTO food_waste (food_category, calories, carbohydrate, protein, fat, fiber, sugar, vitamin_a, vitamin_c)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            data = (
                response_data.get("food_category"),
                response_data["nutrition"].get("calories"),
                response_data["nutrition"].get("carbohydrate"),
                response_data["nutrition"].get("protein"),
                response_data["nutrition"].get("fat"),
                response_data["nutrition"].get("fiber"),
                response_data["nutrition"].get("sugar"),
                response_data["nutrition"].get("vitamin_a"),
                response_data["nutrition"].get("vitamin_c")
            )
            self.db_cursor.execute(query, data)
            self.db_connection.commit()
            print("Result stored in database.")
        except mysql.connector.Error as err:
            print("Error storing result in database:", err)

    def start(self):
        print("Starting webcam...")
        # The webcam
        cap = cv2.VideoCapture(1)

        if not cap.isOpened():
            print("Error: Could not open webcam.")
            return
            
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            processed_frame = self.process_frame(frame)
            cv2.imshow("Food Detection", processed_frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        cap.release()
        cv2.destroyAllWindows()
        self.db_cursor.close()
        self.db_connection.close()