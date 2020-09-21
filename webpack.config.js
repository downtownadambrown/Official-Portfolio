const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/index.js', './src/scss/index.scss'],
    devtool: 'inline-source-map',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "/",
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
                test: /\.(scss|sass)$/i,
                include: [
                    path.resolve(__dirname, 'node_modules/'),
                    path.resolve(__dirname, 'src/scss')
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './build',
                        },
                    },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            },
            {
                test: /\.(pdf|png|jpg|ttf)/,
                use: ['file-loader'],
            },
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};
