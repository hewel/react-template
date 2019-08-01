const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const join = (...paths) => path.join(__dirname, ...paths);
const mode = process.env.NODE_ENV || "development";
const isProd = mode === "production";

const HtmlPluginConfig = {
  title: "React App",
  filename: "index.html",
  template: join("public", "index.html"),
  favicon: join("public", "favicon.png"),
};

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: join("dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join("src"),
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
    ],
  },
  devtool: isProd ? "nosources-source-map" : "eval-source-map",
  devServer: {
    port: 7575,
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin(HtmlPluginConfig)],
};
