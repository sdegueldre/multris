module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
    env: {
        node: true,
    },
    rules: {
        semi: "error",
        indent: ["error", 2],
    },
}
