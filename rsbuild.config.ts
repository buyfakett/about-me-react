import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginMdx } from "@rsbuild/plugin-mdx";

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginMdx(),
    ],
    html: {
        template: './index.html',
    },
    source: {
        entry: {
            index: './src/index.jsx',
        },
        // 编译所有 JS 文件并排除 core-js
        include: [{ not: /[\\/]core-js[\\/]/ }],
        tsconfigPath: './jsconfig.json',
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