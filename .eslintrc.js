module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'react-app',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'info'] }],
    eqeqeq: ['error'],
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-prototype-builtins': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
