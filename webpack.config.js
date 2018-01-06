// webpack.config.js
var path = require('path')

module.exports = {
    entry: ['./assets/js/bundle'],
    output: {
        path: path.join(__dirname, '../'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
}