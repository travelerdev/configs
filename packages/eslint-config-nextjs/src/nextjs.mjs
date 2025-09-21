import { defineConfig } from "eslint/config";
import pluginNext from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import base from "@travelerdev/eslint-config-base/base";

const config = defineConfig(
  ...tseslint.configs.recommended,
  ...base,
  {
    ignores: [
      "next-env.d.ts",
      ".lintstagedrc.js",
      "*.config.js",
      "out/",
      "scripts/",
      "node_modules/*",
      "public/*",
      ".turbo/*",
      ".next/*",
      "package.json"
    ]
  },
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": pluginNext
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  },
  eslintPluginPrettierRecommended
);

export default config;
