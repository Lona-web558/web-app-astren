module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-console': 'warn',
    'react/prop-types': 'off',
    'prefer-const': 'error',
    'arrow-spacing': 'error',
    'space-before-blocks': 'error',
    'block-spacing': 'error'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};