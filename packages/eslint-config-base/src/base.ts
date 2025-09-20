import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import eslintConfigPrettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 */
const config: Linter.Config[] = defineConfig([
  {
    ignores: [
      "dist/**",
      "node_modules/**",
    ]
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier
]);
export default config;
