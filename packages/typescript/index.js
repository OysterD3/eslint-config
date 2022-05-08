module.exports = {
  extends: [
    "@oysterlee/eslint-config-base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts']}
    }
  }
}
