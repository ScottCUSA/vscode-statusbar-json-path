/* eslint-disable @typescript-eslint/naming-convention */
import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: [
      "out",
      "dist",
      "**/*.d.ts"
    ]
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "@typescript-eslint/naming-convention": "warn",
      "curly": "warn",
      "eqeqeq": "warn",
      "no-throw-literal": "warn",
    }
  },
  ...tseslint.configs.recommended,
];
