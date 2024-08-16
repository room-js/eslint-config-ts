
import eslintjs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import { resolve } from 'node:path';

export default [
  includeIgnoreFile(resolve('.gitignore')),
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['./src/**/*.ts'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['error', {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }],
      'max-params': ['error', 3],
      semi: ['error', 'always', { omitLastInOneLineBlock: true }],
      'eol-last': ['error', 'always']
    }
  }
];
