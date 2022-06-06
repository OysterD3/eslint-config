module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  extends: ["plugin:vue/vue3-recommended", "@oysterlee/eslint-config-ts"],
  rules: {
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
  },
};
