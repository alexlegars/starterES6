const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, './src'),
        entry: {
          app: ['./javascript/app.js'],
        },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        host: true ? "127.0.0.1" : null,
        port: 3000,
        inline: true,
        https: false
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: [{
                  loader: 'babel-loader',
                  options:
                  {
                      "presets": [
                          ["env", {
                              "targets": {
                                  "browsers": ["last 2 versions"]
                              }
                          }]
                      ]
                  }
              }],
          },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin
                .extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        { loader: 'css-loader'},
                        { loader: 'postcss-loader'},
                        { loader: 'sass-loader'},
                    ]
                })
          },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true,
        }),
    ],
}
