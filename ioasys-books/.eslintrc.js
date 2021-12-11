module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['trybe-frontend', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-curly-spacing': [2, { when: 'never', allowMultiline: false }],
  },
};
