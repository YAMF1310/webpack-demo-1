const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "YAMF",
      template: "src/assets/index.html",
      devtool: "inline-source-map",
      deServer: { contentBase: "./dist" },
    }),
  ],
  module: {
    rules: [],
  },
};
