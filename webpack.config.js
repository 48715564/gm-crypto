const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        sm4: './src/lib/sm4.js',
        // sm3: './src/sm3/index.js',
        // sm4: './src/sm4/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'window',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
    ]
};
