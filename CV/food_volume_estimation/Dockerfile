# 使用 Python 3.6 作为基础镜像
FROM python:3.6

# 设置工作目录
WORKDIR /app

# 复制所有项目文件到容器
COPY . /app/

# 安装依赖项
RUN pip install --no-cache-dir -r requirements.txt
RUN python setup.py install

# 运行 Flask 服务器
CMD ["python", "main.py"]

