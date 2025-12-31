import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:@next/next/recommended",
      "eslint:recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "no-undef": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  }),
];

export default eslintConfig;
