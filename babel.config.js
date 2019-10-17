const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
    ["@emotion/babel-preset-css-prop", { sourceMap: !prod, autoLabel: !prod, labelFormat: "[local]" }],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { corejs: { version: 3, proposals: true }, useESModules: true }],
    "react-hot-loader/babel",
  ],
};
