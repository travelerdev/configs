import config from "@travelerdev/eslint-config-base/library.js";
import { defineConfig } from "eslint/config";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  {
    ignores: ["packages/**"]
  },
  ...baseConfig,
  ...turborepoConfig,
  ...libraryConfig
]);
