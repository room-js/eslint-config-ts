const config = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'max-len': ['error', {
      code: 100,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'max-params': ['error', 3],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
    'eol-last': ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};

export = config;
