module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "eslint:recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            js: true,
            css: true,
        },
    },
    plugins: ["react", "react-hooks", "css"],
    rules: {
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "semi": ["error", "always"],
        "no-unexpected-multiline": "error",
        "quotes": [
            "error",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "react/jsx-no-undef": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
    },
    overrides: [
        {
            rules: {
                "no-restricted-syntax": [
                    "error",
                    {
                        selector: "SequenceExpression",
                        message:
                            "The comma operator is confusing and a common mistake. Don’t use it!",
                    },
                ],
            },

            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    settings: {
        react: {
            version: "18.2.0t",
        },
    },
};
