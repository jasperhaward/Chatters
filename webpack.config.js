module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    entry: "./src/client/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/js",
    },
    devtool: process.env.NODE_ENV === "development" ? "eval-source-map" : false,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            modules: {
                                localIdentName: "[local]__[hash:base64:5]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx"],
        alias: {
            "@components": __dirname + "/src/client/components",
            "@hooks": __dirname + "/src/client/hooks",
            "@styles": __dirname + "/src/client/styles",
        },
    },
};
