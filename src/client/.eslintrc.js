const { rules, parserOptions, extends: base } = require('../common/.eslintrc.js');
module.exports = {
    extends: base,
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
    rules,
};
