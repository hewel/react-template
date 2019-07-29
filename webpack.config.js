const path = require("path");

const join = (...paths) => path.join(__dirname, ...paths);

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
};
