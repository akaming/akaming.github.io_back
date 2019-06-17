const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './js/app.js',
    output: {
      path: __dirname,
      filename: '../assets/js/biuld.js'
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'css/style.css' })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src/js')
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader?outputStyle=expanded'
          ],
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map',
    mode: 'development'
  };