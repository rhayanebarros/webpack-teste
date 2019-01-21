const commonPaths = require("./common-paths");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    mode:'none',
    entry: {
        main:[
            './src/index.js',
            './src/index.css',
        ],
    },
    output: {
        filename: "main.js",
        path: commonPaths.outpuPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]',
                    },
                }],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'src'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        open: true,
        clientLogLevel: 'none',
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new CleanWebpackPlugin(['dist'], {
            root: `${__dirname}/../`,
        }),
    ],
};

module.exports = config;