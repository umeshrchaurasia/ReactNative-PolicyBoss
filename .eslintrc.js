module.exports = {
  env: {
    es2021: true,
    node: true, // Ensure Node.js global variables and Node.js scoping are enabled
  },
  ignorePatterns: ['*.config.js', '.eslintrc.js', 'bootstrap.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Add React recommendations
    'plugin:react-hooks/recommended', // Add React hooks recommendations
    'plugin:jsx-a11y/recommended', // Accessibility checks
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  plugins: [
    '@typescript-eslint',
    'react', // Include React plugin
    'react-hooks', // Include React Hooks plugin
    'jsx-a11y', // Include accessibility checks
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    curly: ['warn', 'multi-line'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'arrow-parens': ['error', 'always'],
    'eol-last': ['warn', 'always'],
    'multiline-ternary': 'off',
    'no-nested-ternary': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript-specific rules (if any)
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // JavaScript-specific rules (if any)
      },
    },
  ],
};
