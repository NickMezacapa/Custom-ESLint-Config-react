// Custom, tailored eslint rules for create-react-app,
// make sure eslint is installed globally to run 'eslint --fix'
// install eslint-plugin-simple-import-sort as a dev dependency
// add this file to your project root

module.exports = {
	env: {
		browser: true, // Browser global variables like `window` etc.
		commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
		es6: true, // Enable all ECMAScript 6 features except for modules.
		jest: true, // Jest global variables like `it` etc.
		node: true, // Defines things like process.env when generating through node
	},
	extends: ["react-app", "react-app/jest"],
	parser: "babel-eslint", // Uses babel-eslint transforms.
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
	},
	plugins: ["simple-import-sort"], // Sorts imports alphabetically in custom groupings
	root: true, // For configuration cascading.
	rules: {
		"react/jsx-sort-props": [
			// Sorts props alphabetically and by type
			2,
			{
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: false,
				multiline: "ignore",
				ignoreCase: false,
				noSortAlphabetically: false,
				reservedFirst: true,
				locale: "auto",
			},
		],
		"simple-import-sort/imports": "error", // displays errors for imports that are not sorted
		"simple-import-sort/exports": "error", // displays errors for exports that are not sorted
	},
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
			rules: {
				semi: ["error", "always"], // Enforce semicolons
				"simple-import-sort/imports": [
					"error",
					{
						groups: [
							// Custom groupings for imports
							[
								"^react",
								"^next",
								"^@?\\w",
								"^(@|components)(/.*|$)",
								"^\\u0000",
								"^\\.\\.(?!/?$)",
								"^\\.\\./?$",
								"^\\./(?=.*/)(?!/?$)",
								"^\\.(?!/?$)",
								"^\\./?$",
								"^.+\\.?(css)$",
							],
						],
					},
				],
			},
		},
	],
	settings: {
		react: {
			version: "detect", // Detect react version
		},
	},
};
