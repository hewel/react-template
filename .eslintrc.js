module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript",
    // "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint", "emotion"],
  rules: {
    semi: "off",
    "linebreak-style": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-unresolved": [2, { ignore: [`U|utils.*`] }],
    "import/extensions": [2, "never"],
    "import/no-extraneous-dependencies": [2, { devDependencies: ["webpack/**/*", "webpack.*"] }],
    "react/jsx-props-no-spreading": [1, { html: "ignore" }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      plugins: ["react-hooks"],
      extends: [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        // 'react/jsx-indent': 'off',
        // 'prettier/prettier': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": [
          1,
          {
            ignore: ["className", "children"],
          },
        ],
      },
    },
  ],
};
