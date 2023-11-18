module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: ["airbnb-base", "plugin:eslint-plugin/recommended"],
  plugins: ["eslint-plugin"],
  overrides: [
    {
      env: {
        node: true,
        browser: true,
      },
      files: [".eslintrc.{js,cjs}"],
      rules: {
        "no-console": 0,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: "error",
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
  },
};
