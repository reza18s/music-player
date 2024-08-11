import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser, module: false },
    },
    settings: {
      version: "detect",
      react: {
        version: "18",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["dist/**/*"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      semi: ["error", "always"],
      "spaced-comment": "off",
      "no-console": "warn",
      "consistent-return": "off",
      "func-names": "off",
      "object-shorthand": "off",
      "no-process-exit": "off",
      "no-param-reassign": "off",
      "no-return-await": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-underscore-dangle": "off",
      "no-unused-vars": "off",
      "prefer-destructuring": ["error", { object: true, array: false }],
    },
  },
];
