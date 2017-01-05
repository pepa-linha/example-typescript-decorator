module.exports = {
    devtool: "source-map",
    context: __dirname + "/src",
    entry: __dirname + "/src/app.ts",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ["ts-loader"],
                exclude: "node_modules"
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        path: __dirname + "/built",
        filename: "bundle.js"
    }
};