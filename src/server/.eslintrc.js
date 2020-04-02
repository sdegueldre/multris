const { rules, parserOptions, extends: base, env } = require('../common/.eslintrc.js');
module.exports = {
    extends: base,
    env,
    parserOptions: Object.assign(parserOptions, {
        sourceType: "script",
    }),
    rules,
};
