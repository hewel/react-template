const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@emotion/babel-preset-css-prop", { sourceMap: !prod, autoLabel: !prod, labelFormat: "[local]" }],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
