
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import wc from 'eslint-plugin-wc';
import globals from 'globals';


export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    settings: {
      "wc": {
        "elementBaseClasses": ["WJElement"] // Recognize `WJElement` as a Custom Element base class
      }
    },
    ignores: ['.cache', 'demo', 'dist', 'docs', 'experimental-packages', 'node_modules', '**/plugins/**/*.js', '**/*.test.js', '**/element.js'],
    plugins: {
      wc,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      'no-template-curly-in-string': 'error',
      'array-callback-return': 'error',
      'comma-dangle': 'off',
      'consistent-return': 'error',
      curly: 'off',
      'default-param-last': 'error',
      eqeqeq: 'error',
      'lit-a11y/click-events-have-key-events': 'off',
      'no-constructor-return': 'error',
      'no-empty-function': 'warn',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'off',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-assign': 'warn',
      'no-script-url': 'error',
      'no-self-compare': 'warn',
      'no-sequences': 'warn',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'warn',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'warn',
      'prefer-promise-reject-errors': 'error',
      radix: 'off',
      'require-await': 'error',
      'wrap-iife': ['warn', 'inside'],
      'no-shadow': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-multi-assign': 'warn',
      'no-new-object': 'error',
      'no-useless-computed-key': 'warn',
      'no-useless-rename': 'warn',
      'no-var': 'error',
      'prefer-const': 'off',
      'prefer-numeric-literals': 'warn',
      'prefer-object-spread': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'off',
      'no-else-return': 'off',
      'func-names': ['warn', 'never'],
      'one-var': ['warn', 'never'],
      'operator-assignment': 'warn',
      'prefer-arrow-callback': 'warn',
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: '.',
              message: 'Usage of local index imports is not allowed.'
            },
            {
              name: './index',
              message: 'Import from the source file instead.'
            }
          ]
        }
      ],
      'wc/guard-super-call': 'error',
      'wc/no-constructor-attributes': 'error',
      'wc/no-invalid-element-name': 'error',
      'wc/no-self-class': 'warn',
      'wc/attach-shadow-constructor': 'warn',
      'wc/no-child-traversal-in-attributechangedcallback': 'warn',
      'wc/no-child-traversal-in-connectedcallback': 'warn',
      'wc/no-closed-shadow-root': 'warn',
      'wc/no-constructor-params': 'warn',
      'wc/no-customized-built-in-elements': 'warn',
      'wc/no-invalid-extends': 'warn',
      'wc/no-typos': 'warn',
      'wc/require-listener-teardown': 'warn',
      'wc/define-tag-after-class-definition': 'off',
      'wc/expose-class-on-global': 'off',
      'wc/file-name-matches-element': 'warn',
      'wc/guard-define-call': 'warn',
      'wc/max-elements-per-file': 'warn',
      'wc/no-constructor': 'warn',
      'wc/no-exports-with-element': 'warn',
      'wc/no-method-prefixed-with-on': 'warn',
      'wc/tag-name-matches-class': 'warn',
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "off",
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ]
    }
  }
];