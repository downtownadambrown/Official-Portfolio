const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
/*        intro: './src/Intro.js',
        about: './src/AboutMe.js',
        engineers: './src/Engineers.js',
        contact: './src/ContactMe.js',*/
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
                test: /\.(scss|sass)$/i,
                include: [
                    path.resolve(__dirname, 'node_modules/'),
                    path.resolve(__dirname, 'src/scss')
                ],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
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
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
