var path = require('path');

module.exports = {
  entry: ['./apps/index.js', './apps/stylings/main.sass'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "cheap-eval-source-map",
  watch: true,
  module: {
      rules: [{
          test: /\.sass$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader"
          }]
      }]
  }
};
