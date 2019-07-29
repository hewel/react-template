module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier', 'emotion'],
    rules: {
        semi: 'off',
        'linebreak-style': 'off',
        'import/no-unresolved': [2, { ignore: [`U|utils.*`] }],
        'react/jsx-indent': [2, 4]
    },
}
