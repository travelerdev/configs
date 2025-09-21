import { defineConfig } from "eslint/config";
import turboConfig from "eslint-config-turbo/flat";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  {
    ignores: [".turbo/**"]
  },
  ...turboConfig
]);
