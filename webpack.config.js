const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { SourceMapDevToolPlugin } = require("webpack");

const join = (...paths) => path.join(__dirname, ...paths);
const mode = process.env.NODE_ENV || "development";
const isProd = mode === "production";

const HtmlPluginConfig = {
  title: "React App",
  filename: "index.html",
  template: join("public", "index.html"),
  favicon: join("public", "favicon.png"),
};

// const DevToolPluginConfig = {
//   filename: "[name].js.map",
// };

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: join("dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join("src"),
        use: ["babel-loader"],
      },
    ],
  },
  devtool: isProd && "cheap-module-eval-source-map",
  devServer: {
    port: 7575,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(HtmlPluginConfig),
    // new SourceMapDevToolPlugin(DevToolPluginConfig),
  ],
};
