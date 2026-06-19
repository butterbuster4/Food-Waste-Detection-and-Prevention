# 使用轻量级 Python 镜像
FROM python:3.10-slim

# 设置工作目录
WORKDIR /app

# 复制代码到容器内
COPY . .

# 安装系统依赖
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    build-essential \
    libgl1-mesa-glx \
    libglib2.0-0 \
    v4l-utils \
    && rm -rf /var/lib/apt/lists/*

# 安装 Python 依赖
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# 配置环境变量（可选，避免 TensorFlow 日志过多）
ENV TF_CPP_MIN_LOG_LEVEL=2

# 设置容器启动时的命令
CMD ["python", "main.py"]