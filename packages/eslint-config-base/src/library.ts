import { defineConfig } from "eslint/config";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  {
    languageOptions: {
      globals: {
        node: true,
        jest: true
      }
    }
  }
]);
