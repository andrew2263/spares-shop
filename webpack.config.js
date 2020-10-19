const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        },{
            test: /\.scss$/,
            exclude: '/node_modules/',
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "postcss-loader",
                    options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.css$/,
            exclude: '/node_modules/',
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "postcss-loader",
                    options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                }
            ]
        }, {
            test: /\.svg/,
            exclude: '/node_modules/',
            use: {
                loader: 'svg-url-loader',
                options: {}
            }
        }, { 
            test: /\.(eot|ttf|woff|woff2)$/,
            exclude: '/node_modules/',
            use: {
                loader: 'file-loader',
                options: {
                    name: '/[path][name].[ext]'
                }
            }
        }]
    },

    devServer: {
        overlay: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],

};