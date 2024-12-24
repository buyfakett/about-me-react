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

    # 格式化JSON数据，并将其作为字符串写入到数据
    formatted_data = json.dumps(src_data, indent=2, ensure_ascii=False)

    data = 'export const wakatineDefaultData = ' + formatted_data

    os.makedirs("src/default_data", exist_ok=True)

    # 将数据保存到本地文件
    with open('src/default_data/waka_time.js', 'w', encoding='utf-8') as file:
        file.write(data)

except requests.exceptions.RequestException as error:
    print(f'请求或保存文件出错: {error}')
