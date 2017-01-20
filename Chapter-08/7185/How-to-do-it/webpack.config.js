varHtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};