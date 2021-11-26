module.exports = (env) => ({
    mode: env.target,
    entry: "./src/client/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.module\.scss$/,
                use: [
                    "style-loader",
                    "@teamsupercell/typings-for-css-modules-loader",
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
    devtool: env.target === "development" ? "eval-source-map" : false,
});
