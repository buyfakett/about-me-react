import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// @ts-ignore
import { buildInfo } from './src/default_data/buildInfo';
// @ts-ignore
import { imgUrl } from './src/config';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title: 'buyfakett - About Me',
        meta: {
            charset: {
                charset: 'utf-8',
            },
            viewport: 'width=device-width, initial-scale=1.0',
            author: 'buyfakett',
            description: 'about me • buyfakett',
            'time-zone': 'Asia/Shanghai',
            'git-hash': buildInfo.gitHash,
            'git-branch': buildInfo.gitBranch,
            'commit-date': buildInfo.commitDate,
            'commit-count': buildInfo.commitCount,
            'build-time': buildInfo.buildTime,
        },
        favicon: imgUrl.headPortrait,
        appIcon: {
            icons: [
                { src: imgUrl.headPortrait, size: 192 },
            ],
        },
    },
    source: {
        entry: {
            index: './src/index.jsx',
        },
        // 编译所有 JS 文件并排除 core-js
        // include: [{ not: /[\\/]core-js[\\/]/ }],
        tsconfigPath: './jsconfig.json',
        include: [/\.md$/],
    },
    tools: {
        bundlerChain: (chain) => {
            chain.module.rule('markdown').test(/\.md$/).type('asset/source');
        },
    },
    output: {
        distPath: {
            root: 'build',
        },
        inlineScripts({ size }) {
            return size < 10 * 1000;
        },
    },
    performance: {
        chunkSplit: {
            // 代码拆分
            strategy: 'split-by-size',
            minSize: 30000, // 30k
            maxSize: 500000, // 50k
        },
    },
});
