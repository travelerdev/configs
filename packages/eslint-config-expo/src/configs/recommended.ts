import { type Linter } from "eslint";
import globals from "globals";

import { allExtensions } from "../utils/extensions";
import core from "./core";
import typescript from "./typescript";
import reactConfig from "./react";
import base from "@travelerdev/eslint-config-base/base";

const commonRecs: Linter.Config[] = [
  {
    files: allExtensions,
    languageOptions: {
      globals: {
        __DEV__: "readonly",
        ErrorUtils: false,
        FormData: false,
        XMLHttpRequest: false,
        alert: false,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        clearImmediate: false,
        fetch: false,
        navigator: false,
        process: false,
        requestAnimationFrame: false,
        requestIdleCallback: false,
        setImmediate: false,
        window: false,
        "shared-node-browser": true
      }
    }
  },
  {
    files: ["*.web.*"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];

export const recommendedJS: Linter.Config[] = [...core, ...base, ...reactConfig, ...commonRecs];

export const recommended: Linter.Config[] = [
  ...core,
  ...base,
  ...typescript,
  ...reactConfig,
  ...commonRecs
];
