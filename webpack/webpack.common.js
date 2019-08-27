const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { SourceMapDevToolPlugin } = require("webpack");

const join = (...paths) => path.join(__dirname, "../", ...paths);

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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join("src"),
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(HtmlPluginConfig),
    // new SourceMapDevToolPlugin(DevToolPluginConfig),
  ],
};
