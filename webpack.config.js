const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/",
    output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
    }
};