import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import turboConfig from "eslint-config-turbo/flat";

/**
 * A shared ESLint configuration for the repository.
 * */
const config: Linter.Config[] = defineConfig([
  {
    ignores: [".turbo/**"]
  },
  ...turboConfig
]);

export default config;
