module.exports = {
    extends: [
        '@centerforopenscience/eslint-config-base',
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
        'ember/local-modules': 'warn',
        'ember/no-observers': 'warn',
        'ember/no-function-prototype-extensions': 'warn',
        'ember/named-functions-in-promises': 'warn',
        'ember/order-in-components': 'warn',
        'ember/order-in-routes': 'warn',
        'ember/order-in-controllers': 'warn',
    },
};
