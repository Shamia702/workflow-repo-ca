import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Browser environment for main app files
  {
    files: ['js/**/*.js', 'css/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,  // for unit tests
        test: true,      // for unit tests
        it: true,        // alternative for tests
        expect: true,    // assertions in tests
        require: true,   // Node.js usage (like Tailwind config)
        module: true,    // Node.js usage
        process: true,   // for environment variables
      },
    },
  },
  // Node.js environment for config and test files
  {
    files: ['*.config.js', '*.config.mjs', 'tests/**/*.js', 'playwright.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },
];
