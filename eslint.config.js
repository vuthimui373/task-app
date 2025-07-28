import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';
import pluginPrettier from 'eslint-plugin-prettier';


export default defineConfig([
  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser', 
      parserOptions: {
        project: './tsconfig.json',
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: pluginImport,
      react: pluginReact,
      prettier:pluginPrettier
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],
      'prettier/prettier': 'warn',
    },
  },

  pluginReact.configs.flat.recommended,
]);
