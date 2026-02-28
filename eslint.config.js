import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: { parser: ts.parser },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/valid-compile': 'error',
      // Hash links and external links don't use SvelteKit's client-side router
      'svelte/no-navigation-without-resolve': 'off',
      // Key expressions are optional for static lists that never reorder
      'svelte/require-each-key': 'off',
    },
  },
  {
    ignores: [
      'build/**',
      '.svelte-kit/**',
      'node_modules/**',
      'coverage/**',
      'playwright-report/**',
    ],
  }
);
