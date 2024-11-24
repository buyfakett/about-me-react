import requests
import json
import os

# 定义API的URL
API_URL = 'https://api.blog.tteam.icu/waka_time.json'  # 替换为实际的 API 地址


# 发送GET请求，获取API数据
try:
    response = requests.get(API_URL)
    response.raise_for_status()  # 检查是否请求成功

    # 获取返回的JSON数据
    src_data = response.json()

    data = 'export const wakatineDefaultData = ' + str(src_data)

    os.makedirs("src/default_data", exist_ok=True)

    # 将数据保存到本地文件
    with open('src/default_data/waka_time.js', 'w', encoding='utf-8') as file:
        file.write(data)

except requests.exceptions.RequestException as error:
    print(f'请求或保存文件出错: {error}')
