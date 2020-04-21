module.exports = {
    extends: [
        './index.js',
        'plugin:ember/recommended',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: [],
    rules: {
        // Support for route-able components is suspect
        'ember/alias-model-in-controller': 'off',

        // One day
        'ember/use-ember-get-and-set': 'off',

        // Warnings... for now
        'ember/new-module-imports': 'warn',
        'ember/no-observers': 'warn',
        'ember/no-function-prototype-extensions': 'warn',
        'ember/named-functions-in-promises': [
            'warn',
            {
                allowSimpleArrowFunction: true,
            },
        ],
        'ember/order-in-components': 'warn',
        'ember/order-in-routes': 'warn',
        'ember/order-in-controllers': 'warn',
    },
};
