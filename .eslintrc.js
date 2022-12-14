module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'import/prefer-default-export': 0,
        'linebreak-style': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'no-shadow': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-promise-executor-return': 0,
        'no-param-reassign': 0,
        '@typescript-eslint/no-var-requires': 0,
        'react/button-has-type': 0,
        'no-nested-ternary': 0,
        'no-unneeded-ternary': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-no-useless-fragment': 0,
        'import/order': 0,
        'jsx-a11y/html-has-lang': 0,
        'no-lonely-if': 0,
        'prefer-promise-reject-errors': 0,
        'prefer-object-spread': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'jsx-a11y/alt-text': 0,
        'global-require': 0,
    },
}
