module.exports = {
  env: {
    "cypress/globals": true,
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["cypress", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:cypress/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "all",
        singleQuote: false,
        arrowParents: "always",
      },
    ],
  },
};
