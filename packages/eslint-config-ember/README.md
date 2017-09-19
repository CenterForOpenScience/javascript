# @centerforopenscience/eslint-config-ember

> Ember ESLint configuration for the Center for Open Science

[![npm version](https://badge.fury.io/js/%40centerforopenscience%2Feslint-config-ember.svg)](https://badge.fury.io/js/%40centerforopenscience%2Feslint-config-ember)

Based on [COS's Base Config](https://github.com/CenterForOpenScience/javascript/tree/develop/packages/eslint-config-base) with [eslint-plugin-ember](https://github.com/netguru/eslint-plugin-ember)

Since route-able components aren't stable, this is unnecessary:
* `alias-model-in-controller`

This will produce too many errors or warnings to count, so for now, it's turned completely off:
* `use-ember-get-and-set`

The following are set to warnings, but will become errors later:
* `local-modules`
* `no-observers`
* `no-function-prototype-extensions`
* `named-functions-in-promises`
* `order-in-components`
* `order-in-routes`
* `order-in-controllers`
