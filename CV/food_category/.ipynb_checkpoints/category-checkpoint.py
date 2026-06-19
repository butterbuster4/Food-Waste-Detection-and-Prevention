import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, GlobalAveragePooling2D
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.callbacks import ModelCheckpoint

# 设置数据集路径和训练参数
train_dir = "D:/school/GRP/cv/food-101/train"  # 替换为实际训练集路径
val_dir = "D:/school/GRP/cv/food-101/validation"      # 替换为实际验证集路径
num_classes = 101
img_height, img_width = 224, 224
batch_size = 32
epochs = 30  # 适当增加训练轮数

# 数据增强
train_datagen = ImageDataGenerator(
    rescale=1.0 / 255.0,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode="nearest",
)

val_datagen = ImageDataGenerator(rescale=1.0 / 255.0)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode="categorical",
)

val_generator = val_datagen.flow_from_directory(
    val_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode="categorical",
)

# 使用预训练的 EfficientNetB0 模型
base_model = EfficientNetB0(weights="imagenet", include_top=False, input_shape=(img_height, img_width, 3))

# 冻结预训练层
base_model.trainable = False

# 构建模型
model = Sequential([
    base_model,
    GlobalAveragePooling2D(),
    Dropout(0.5),
    Dense(256, activation="relu"),
    Dropout(0.5),
    Dense(num_classes, activation="softmax"),
])

# 编译模型
model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

# 设置模型检查点
checkpoint = ModelCheckpoint(
    "food_classification_best_model.keras",
    monitor="val_accuracy",
    save_best_only=True,
    mode="max"
)

# 训练模型
history = model.fit(
    train_generator,
    epochs=epochs,
    validation_data=val_generator,
    callbacks=[checkpoint]
)

# 手动保存最终的模型
model.save("food_classification_final_model.keras")

print("训练完成，最佳模型已保存为 'food_classification_best_model.keras'")
print("最终模型已保存为 'food_classification_final_model.keras'")