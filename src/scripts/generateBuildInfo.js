import { promises as fs } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/**
 * 生成构建信息
 * @module generateBuildInfo
 * @description 生成包含 Git 信息和构建时间的构建信息文件
 */

function convertTime(date) {
    date.setUTCHours(date.getUTCHours() + 8);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 获取 Git 哈希
const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
// 获取 Git 分支
const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
// 获取 Git 提交时间
const commitDateStr = execSync('git log -1 --format=%cd').toString().trim();
const commitDate = convertTime(new Date(commitDateStr));
// 获取构建时间
const buildTime = convertTime(new Date());
// 获取 Git 提交次数
const commitCount = execSync('git rev-list --count HEAD').toString().trim();

const buildInfo = {
    buildTime,
    gitBranch,
    gitHash,
    commitCount,
    commitDate
};

// 确保目录存在
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = join(__dirname, '../default_data');

try {
    await fs.access(outputDir);
} catch {
    await fs.mkdir(outputDir, { recursive: true });
}

// 写入为 JavaScript 文件，包含 const 变量
const jsContent = `export const buildInfo = ${JSON.stringify(buildInfo, null, 2)};`;

await fs.writeFile(join(outputDir, 'buildInfo.js'), jsContent);
console.log('构建信息已保存为 JavaScript 文件:', buildInfo);
