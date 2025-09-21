import { defineConfig } from "eslint/config";

import eslintConfigPrettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"]
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier
]);
