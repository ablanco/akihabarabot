module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    node: true
  },
  rules: {
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-console': 0,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-eval': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-new': 1,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'vars-on-top': 2,
    'no-shadow': 1,
    'no-use-before-define': 2,
    'camelcase': ['error', {'properties': 'always'}],
    'no-plusplus': 2,
    'no-tabs': 2,
    'no-nested-ternary': 2,
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'radix': ['error', 'always'],
    'eqeqeq': ['error', 'always']
  }
};
