/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const join = (...paths) => path.join(__dirname, "../", ...paths);

const HtmlPluginConfig = {
  title: "React App",
  filename: "index.html",
  template: join("public", "index.html"),
  favicon: join("public", "favicon.png"),
};

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin(HtmlPluginConfig),
  // new SourceMapDevToolPlugin(DevToolPluginConfig),
];

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: join("dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        include: join("src"),
        use: ["babel-loader"],
      },
    ],
  },
  performance: { maxEntrypointSize: 500000, maxAssetSize: 300000 },
  stats: {
    all: false,
    errors: true,
    warnings: true,
    logging: "warn",
    chunks: true,
    chunksSort: "id",
    colors: true,
  },
  plugins,
};
