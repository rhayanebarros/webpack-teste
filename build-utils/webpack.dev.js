const config = {
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
};

module.exports = config;