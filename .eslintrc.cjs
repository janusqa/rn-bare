/** @type {import("@types/eslint").Linter.Config} */
const config = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"eslint-plugin-react",
		"eslint-plugin-react-hooks",
		"eslint-plugin-react-native",
	],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"plugin:react/jsx-runtime",
			],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
	],
	rules: {
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
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
	},
};

module.exports = config;
