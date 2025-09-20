import baseConfig from "@travelerdev/eslint-config-base/base.js";
import libraryConfig from "@travelerdev/eslint-config-base/library.js";
import turborepoConfig from "@travelerdev/eslint-config-base/turborepo.js";

/** @type {import("eslint").Linter.Config} */
export default [...baseConfig, ...turborepoConfig, ...libraryConfig];
