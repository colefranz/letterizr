 var path = require('path');
 var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Letterizr',
        filename: 'index.html',
        template: 'src/template.ejs'
      })
    ],
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Less to CSS
          }]
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: []
          },
          include: [
            path.resolve(__dirname, 'src')
          ]
        }, {
          test: /\.(wav)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'sounds/'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }
 };
