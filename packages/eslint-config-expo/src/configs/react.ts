import { Linter } from "eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import { allCodeExtensions } from "../utils/extensions";

const react: Linter.Config[] = [
  {
    files: allCodeExtensions,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      reactHooks: fixupPluginRules(reactHooksPlugin)
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "warn",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/no-danger-with-children": "warn",
      "react/no-deprecated": "warn",
      "react/no-direct-mutation-state": "warn",
      "react/no-string-refs": ["warn", { noTemplateLiterals: true }],
      "react/no-this-in-sfc": "warn",
      "react/no-unknown-property": "warn",
      "react/require-render-return": "warn"
    },
    settings: {
      react: { version: "detect" }
    }
  }
];

export default react;
