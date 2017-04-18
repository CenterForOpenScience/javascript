module.exports = {
    extends: [
        'cos-base',
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
        // One day
        'ember/use-ember-get-and-set': 'off',

        // Warnings... for now
        'ember/local-modules': 'warn',
        'ember/alias-model-in-controller': 'warn',
        'ember/no-observers': 'warn',
        'ember/no-function-prototype-extensions': 'warn',
        'ember/named-functions-in-promises': 'warn',
        'ember/order-in-components': 'warn',
        'ember/order-in-routes': 'warn',
        'ember/order-in-controllers': 'warn',
    },
    settings: {
        'import/external-module-folders': [
            'node_modules',
            'bower_components',
        ],
        'import/resolver': {
            node: {
                moduleDirectory: [
                    'node_modules',
                    'bower_components',
                ],
            },
        },
        'import/extensions': {
            js: 'never',
        },
    },
};
