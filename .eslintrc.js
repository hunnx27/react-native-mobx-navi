module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
