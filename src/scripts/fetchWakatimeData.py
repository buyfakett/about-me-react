import requests
import json
import os

# 定义API的URL列表
API_URLS = [
    'https://blog-api.tteam.icu/waka_time',
]

# 遍历每个 API URL
for api_url in API_URLS:
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # 检查是否请求成功

        # 获取返回的JSON数据
        src_data = response.json()

        # 格式化JSON数据，并将其作为字符串写入到数据
        formatted_data = json.dumps(src_data, indent=2, ensure_ascii=False)

        # 根据 API 的 URL 生成文件名
        file_name = api_url.split('/')[-1].replace('.json', '')
        data = f'export const {file_name}DefaultData = ' + formatted_data

        os.makedirs("src/default_data", exist_ok=True)

        # 将数据保存到本地文件
        with open(f'src/default_data/{file_name}.js', 'w', encoding='utf-8') as file:
            file.write(data)

    except requests.exceptions.RequestException as error:
        print(f'请求或保存文件出错: {error}')