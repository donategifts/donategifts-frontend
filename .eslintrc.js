module.exports = {
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['prettier', '@typescript-eslint', 'import', 'unicorn'],
	rules: {
		'prettier/prettier': ['error'],
		'max-len': 0,
		// Enforce import order
		'import/order': 'error',
		// Imports should come first
		'import/first': 'error',
		// Other import rules
		'import/no-mutable-exports': 'error',
		// Allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		// Allow console log during development, but put out warnings, except for warn and error
		'no-console': [
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
			{ allow: ['warn', 'error'] },
		],
		// Prefer const over let
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		// No single if in an "else" block
		'no-lonely-if': 'error',

		'import/no-unresolved': 'off',

		'no-underscore-dangle': 0,

		'object-curly-spacing': 0,

		'prefer-object-spread': 'error',

		'no-plusplus': 'warn',

		'no-param-reassign': 'warn',

		'no-throw-literal': 'warn',
		// Force curly braces for control flow,
		// including if blocks with a single statement
		curly: ['error', 'all'],
		// Force dot notation when possible
		'dot-notation': 'error',

		'no-var': 'error',
		// Force object shorthand where possible
		'object-shorthand': 'error',
		// No useless destructuring/importing/exporting renames
		'no-useless-rename': 'error',

		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

		'require-atomic-updates': 0,

		'no-await-in-loop': 0,

		'class-methods-use-this': 0,

		'no-useless-constructor': 0,

		'import/prefer-default-export': 0,

		'@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],

		'@typescript-eslint/no-useless-constructor': 0,

		'@typescript-eslint/no-parameter-properties': 0,

		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
		],

		'@typescript-eslint/interface-name-prefix': 'off',

		'@typescript-eslint/camelcase': 'off',

		'@typescript-eslint/explicit-member-accessibility': 0,

		indent: [2, 'tab', { SwitchCase: 1 }],

		// Allow unresolved imports
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		/** ******************* */
		/*   Unicorn Rules    */
		/** ******************* */
		'unicorn/prevent-abbreviations': 'off',

		'unicorn/filename-case': 'off',

		/** ******************* */
		/*   React Rules    */
		/** ******************* */

		'react/jsx-props-no-spreading': 0,

		'react/jsx-indent-props': 0,

		'react/jsx-indent': [2, 'tab'],

		'react/no-unused-prop-types': 0,

		'react/destructuring-assignment': 0,
	},
	env: {
		jest: true,
		mocha: true,
		browser: true,
		node: true,
	},
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
		'prettier',
		'prettier/standard',
		'prettier/@typescript-eslint',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
	},
};
