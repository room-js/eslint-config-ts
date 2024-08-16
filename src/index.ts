 import { Linter } from 'eslint';
 import eslintjs from '@eslint/js';
 import tseslint from 'typescript-eslint';

 const config: Linter.Config = {
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['warn', 2, { SwitchCase: 1 }],
    "max-len": ['error', {
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

export default tseslint.config(
  eslintjs.configs.recommended,
  tseslint.configs.eslintRecommended,
  config,
);
