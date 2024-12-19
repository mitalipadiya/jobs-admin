import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked, eslintConfigPrettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'react-hooks': reactHooks,
      react: react,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Core Airbnb rules
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'error',

      // React-specific rules
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',

      // Import rules
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
        },
      ],

      // TypeScript rules
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase', 'PascalCase'] },
      ],
    },
  },
);
