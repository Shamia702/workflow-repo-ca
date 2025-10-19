import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['js/**/*.js', 'css/**/*.js'],
    languageOptions: {
      globals: {
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
