module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'raw-loader',
            },
        ],
    },
};
