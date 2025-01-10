import fs from 'fs';
import path from 'path';
import { apiList } from '../config.js';

// 定义 API 的 URL 列表
const API_URLS = [apiList.wakaTime];

// 遍历每个 API URL
API_URLS.forEach(async (apiUrl) => {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        // 获取返回的 JSON 数据
        const srcData = await response.json();

        // 格式化 JSON 数据
        const formattedData = JSON.stringify(srcData, null, 2);

        // 根据 API 的 URL 生成文件名
        const fileName = apiUrl.split('/').pop().replace('.json', '');
        const data = `export const ${fileName}DefaultData = ${formattedData};`;

        // 获取当前工作目录
        const currentDir = process.cwd();

        // 确保目录存在
        const dirPath = path.resolve(currentDir, 'src', 'default_data');
        fs.mkdirSync(dirPath, { recursive: true });

        // 将数据保存到本地文件
        const filePath = path.join(dirPath, `${fileName}.js`);
        fs.writeFileSync(filePath, data, 'utf8');

        console.log(`文件已保存到 ${filePath}`);
    } catch (error) {
        console.error(`请求或保存文件出错: ${error.message}`);
    }
});
