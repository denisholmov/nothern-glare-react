import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import eslintRules from "eslint/config";
import tseslintPlugin from "typescript-eslint";

const config = eslintRules.defineConfig([
  // Ignore exact files and catalogs
  {
    ignores: ["node_modules/"],
  },

  // Turns off all rules that are unnecessary or might conflict with Prettier.
  eslintConfigPrettier,

  // Basic recommendations
  eslint.configs.recommended,

  // Availability check
  jsxA11yPlugin.flatConfigs.recommended,

  // Security check
  securityPlugin.configs.recommended,

  // TypeScript check
  tseslintPlugin.configs.recommended,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  // Checking the imports and exports
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".ts", ".tsx"],
        },
      },
    },
  },

  // Remove unused imports

  {
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },

  // Sorting the imports

  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
    },
  },

  // Common
  {
    files: ["**/*.{js,ts,tsx}"],
    ignores: ["node_modules/", "@types/", ".next/", "*.d.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        module: "writable",
      },
    },
    rules: {
      "no-warning-comments": [
        "error",
        { terms: ["TODO"], location: "anywhere" },
      ],
      "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }],
      "max-params": ["error", 3],
      "no-mixed-operators": "error",
      "prefer-const": "error",
      "no-implicit-coercion": [
        "error",
        { boolean: true, number: true, string: true, allow: ["!!"] },
      ],
    },
  },

  // React
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // React Hooks
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
]);

export default config;
