// eslint.config.mjs
// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNativePlugin from "eslint-plugin-react-native";

export default defineConfig(
	{
		ignores: [
			"eslint.config.mjs",
			"node_modules/**",
			".expo/**",
			"dist/**",
			"coverage/**",
			"yarn.lock",
			"package-lock.json",
			"babel.config.cjs",
			"metro.config.js",
		],
	},

	eslint.configs.recommended,

	{
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			react: reactPlugin,
            'react-hooks': /** @type {any} */ (reactHooksPlugin),
            'react-native': /** @type {any} */ (reactNativePlugin),
		},

		settings: {
			react: {
				version: "detect",
			},
		},

		languageOptions: {
			parser: tseslint.parser,
			sourceType: "module",
			globals: {
				...globals.node,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},

		extends: [tseslint.configs.recommendedTypeChecked],

		rules: {
			// React
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,

			// React Native (less noisy than "all")
			...reactNativePlugin.configs.all.rules,
            "react-native/no-inline-styles": "warn",
            "react-native/no-color-literals": "off",
            "react-native/sort-styles": "off",
			"react-native/no-raw-text": ["error", {
				"skip": ["AppText"]
			}],

			// TS improvements
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"error",
				{
					allowSingleExtends: true,
				},
			],

			// React adjustments
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},

	prettierConfig
);