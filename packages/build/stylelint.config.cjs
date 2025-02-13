 
const {
    propertyOrdering,
    selectorOrdering, 
    //eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('stylelint-semantic-groups');

/** @type {import('stylelint').Config} */
module.exports = {
    extends: 'stylelint-config-standard-scss',
    plugins: [
        'stylelint-order',
        '@stylistic/stylelint-plugin', 
    ],
    rules: {
        'selector-class-pattern': null,
        'order/order': selectorOrdering, // to fine-tune configuration use selectorOrderFactory
        'order/properties-order': propertyOrdering,
        'declaration-empty-line-before': null,
        '@stylistic/indentation': 4,
    },
};

