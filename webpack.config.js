const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./build")
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ttf$/i,
                use: ['ttf-loader'],
            },
            {
                test: /\.pdf$|png|jpg/,
                use: ['file-loader'],
            },
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
