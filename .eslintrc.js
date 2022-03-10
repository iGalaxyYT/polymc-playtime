module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['xo', 'xo-typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: [],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'no-mixed-operators': 'off',
		'operator-linebreak': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'quote-props': 'off',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/object-curly-spacing': 'off',
		'capitalized-comments': 'off',
		curly: 'off',
		'@typescript-eslint/no-floating-promises': 'off',
	},
};
