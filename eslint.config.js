import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'
import react from "eslint-plugin-react";
// TODO: Add tailwind once plugin supports tailwind v4
// import tailwind from 'eslint-plugin-tailwindcss'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, react.configs.flat.recommended],
        settings: {
            react: {
                version: 'detect',
            },
        },
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            "jsx-a11y": jsxA11Y,
            'prettier': prettier,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "prettier/prettier": 'warn',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/react-in-jsx-scope': "off",
        },
    },
)
