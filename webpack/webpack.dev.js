const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 7575,
  },
  stats: {
    chunks: false,
    errorDetails: true,
    modules: true,
    excludeModules: moduleSource => {
      const isExclude = [/.*node_modules?.*/, /^\(webpack\).*/].some(reg => reg.test(moduleSource));
      return isExclude || !moduleSource;
    },
  },
});
