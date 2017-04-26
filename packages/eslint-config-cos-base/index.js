module.exports = {
    extends: [
        'airbnb-base',
    ],
    parser: 'babel-eslint',
    plugins: [],
    rules: {
        // We're a Python shop
        indent: ['error', 4],

        // Allow for..of loops, but keep the others
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        'func-names': ['warn', 'never'],

        // let's be reasonable here
        'no-plusplus': 'off',

        // Causing a lot of errors, need to figure out how to use bower vs node for dependencies
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/first': 'warn',

        'no-continue': 'off',

        // Warn for now
        'max-len': 'warn',
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
