const path = require("path");
const commonPaths = require("./common-paths");

const config = {
    mode: "none",
    entry: "./src/",
    output: {
    filename: "main.js",
    path: commonPaths.outpuPath
    }
};

module.exports = config;