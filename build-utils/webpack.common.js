const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
    mode:'none',
    entry: commonPaths.appEntry,
    output: {
        filename: "main.js",
        path: commonPaths.outpuPath
    },
    module: {
        rules: [
            {
                test: /\.png/,
                use: [
                    {
                        loader:"url-loader",
                        options: {
                            limit: 120000000
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'src'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        open: true,
        clientLogLevel: 'none'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};

module.exports = config;