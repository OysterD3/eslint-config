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
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  plugins: ["cypress", "import", "prettier"],
  extends: ["eslint:recommended", "plugin:cypress/recommended", "prettier"],
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
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
  },
};
