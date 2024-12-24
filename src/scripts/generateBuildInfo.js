const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

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

const buildInfo = {
    buildTime,
    gitBranch,
    gitHash,
    commitDate
};

// 确保目录存在
const outputDir = path.join(__dirname, '../default_data');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 写入为 JavaScript 文件，包含 const 变量
const jsContent = `
export const buildInfo = ${JSON.stringify(buildInfo, null, 2)};
`;

fs.writeFileSync('../default_data/buildInfo.js', jsContent);
console.log('构建信息已保存为 JavaScript 文件:', buildInfo);
