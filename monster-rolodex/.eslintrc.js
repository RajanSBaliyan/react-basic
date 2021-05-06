module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'spaced-comment': 'warn',
    'no-console': 'warn',
    'consistent-return': 'warn',
    'func-names': 'off',
    'object-shorthand': 'warn',
    'no-process-exit': 'warn',
    'camelcase': 'warn',
    'comma-spacing': ['error', { before: false, after: true }],
    'block-spacing': 'warn',
    'no-param-reassign': 'warn',
    'no-return-await': 'warn',
    'no-underscore-dangle': 'warn',
    'class-methods-use-this': 'warn',
    'brace-style': 'warn',
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
};
