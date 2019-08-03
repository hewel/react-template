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
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/react'],
    plugins: ['prettier', 'emotion'],
    rules: {
        semi: 'off',
        'linebreak-style': 'off',
        'import/no-unresolved': [2, { ignore: [`U|utils.*`] }],
        'react/jsx-indent': [2, 2],
        'import/extensions': [2, 'never', { jsx: 'always' }],
    },
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            plugins: ['react-hooks'],
            rules: {
                // 'react/jsx-indent': 'off',
                // 'prettier/prettier': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
                'react/prop-types': [
                    1,
                    {
                        ignore: ['className', 'children'],
                    },
                ],
            },
        },
    ],
}
