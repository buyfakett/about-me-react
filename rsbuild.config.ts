import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './index.html',
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
    },
    performance: {
        chunkSplit: {
            // 代码拆分
            strategy: 'split-by-experience',
        },
    },
});
