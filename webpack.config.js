const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath:"/build"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { test: /pixi\.js/, loader: 'expose-loader?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /p2\.js/, loader: 'expose-loader?p2' },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'War'
    })],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 9000
    },
    resolve: {
        alias: {
            'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
            'p2': path.join(phaserModulePath, 'build/custom/p2.js')

        }
    }
};