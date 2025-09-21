import { Linter } from "eslint";
import { tsExtensions } from "../utils/extensions";
import importPlugin from "eslint-plugin-import";

const typescript: Linter.Config[] = [
  {
    ...importPlugin.flatConfigs.typescript,

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": tsExtensions
      }
    }
  },
  {
    files: ["*.ts", "*.tsx", "*.d.ts"],
    rules: {
      "@typescript-eslint/array-type": ["warn", { default: "array" }],
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-wrapper-object-types": "warn",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as", objectLiteralTypeAssertions: "allow" }
      ],
      "@typescript-eslint/no-extra-non-null-assertion": "warn",

      // Overrides
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",

      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "warn",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
          caughtErrors: "all"
        }
      ],

      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "warn",

      // The typescript-eslint FAQ recommends turning off "no-undef" in favor of letting tsc check for
      // undefined variables, including types
      "no-undef": "off"
    }
  }
];

export default typescript;
