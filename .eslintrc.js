/*
 * @Author: maggot-code
 * @Date: 2021-02-28 16:28:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-16 15:34:18
 * @Description: file content
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'no-console': 'off',
        'no-debugger': 'off',
        'semi': 'off',
        'quotes': 'off',
        'comma-dangle': 'off',
        'no-tabs': 'off',
        'no-trailing-spaces': 'off',
        'no-unused-vars': 'off',
        'space-before-function-paren': 'off',
        'no-useless-constructor': 'off',
        'no-prototype-builtins': 'off',
        'spaced-comment': 'off',
        'eol-last': 'off',
        'prefer-const': 'off',
        "no-extend-native": 'off',
        'eqeqeq': 'off',
        "vue/no-unused-components": 'off'
    }
}