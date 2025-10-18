import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: true,
        document: true,
        console: true,
        fetch: true,
        FormData: true,
        localStorage: true,
        URLSearchParams: true,
        module: true, // for tailwind.config.js
        describe: true,
        it: true,
        test: true,
        expect: true,
        beforeEach: true,
        afterEach: true
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
