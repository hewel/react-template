const merge = require("webpack-merge");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      // include all types of chunks
      minSize: 200000,
      maxSize: 500000,
      chunks: "all",
    },
  },
  devtool: "source-map",
  plugins: [new ProgressBarPlugin()],
});
