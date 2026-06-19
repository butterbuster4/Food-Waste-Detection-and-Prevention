import os
import subprocess
from food_category.FoodDetector import FoodDetector

def docker_login(username, password):
    try:
        result = subprocess.run(
            ["docker", "login", "-u", username, "-p", password],
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        print(result.stdout.decode('utf-8'))
    except subprocess.CalledProcessError as e:
        print("Error during Docker login:", e)
        return False
    return True

def run_docker_container(image_name, port_number):
    try:
        command = f'start cmd /k "docker run -p {port_number} {image_name}"'
        process = subprocess.Popen(command, shell=True)
        print(f"Docker container {image_name} started in a new window.")
    except subprocess.CalledProcessError as e:
        print("Error running Docker container:", e)
        return False
    return True

def run_food_category_detector(db_host, db_port, db_user, db_password, db_name):
    detector = FoodDetector(db_host, db_port, db_user, db_password, db_name)
    detector.start()

if __name__ == "__main__":
    docker_username = "butterbuster"
    docker_password = "Gybb520520@"
    port_number = "5000:5000"
    image_name = "weight"

    if docker_login(docker_username, docker_password):
        run_docker_container(image_name, port_number)
        print("Docker container started.")
        run_food_category_detector(
            db_host = "localhost", 
            db_port = "3306", 
            db_user = "bob", 
            db_password = "1234", 
            db_name = "food_waste"
            )
        print("Food category detector started.")

