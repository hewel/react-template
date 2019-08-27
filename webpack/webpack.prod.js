const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
});
