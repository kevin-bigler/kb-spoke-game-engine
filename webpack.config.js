const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * Put the entry script path(s) here.
     */
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
        tsindex: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    mode: "development",
    devtool: 'inline-source-map',
}
