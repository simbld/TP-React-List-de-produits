module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true, // Ajouté pour couvrir l'environnement Node.js
    },
    extends: [
        "airbnb",
        "plugin:react/recommended", // Pour les règles recommandées de React
        "plugin:react-hooks/recommended", // Pour les règles des hooks React
        "prettier", // Assure que Prettier et ESLint ne sont pas en conflit
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true, // Support pour JSX
        },
    },
    plugins: [
        "react", // Plugin ESLint pour React
        "react-hooks", // Plugin pour les hooks React
    ],
    rules: {
        semi: "error",
        "react/jsx-no-undef": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
        // Ajoute ici d'autres règles personnalisées si nécessaire
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
};
