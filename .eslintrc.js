module.exports = {
  root: true,
  env: { es2021: true, node: true },
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': {
        'ts': '@typescript-eslint/parser',
        'js': '@typescript-eslint/parser',
        '<template>': 'espree'
    }
},
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  globals: { Keycloak: true },
  rules: {
    'import/prefer-default-export': 'off',
    radix: ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'array-bracket-spacing': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'max-len': ['error', { code: 160 }],
    'array-bracket-newline': ['error', 'consistent'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 5 },
        ObjectPattern: { multiline: true, minProperties: 5 },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 5 }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true
      }
    ],
    'vue/html-indent': ['error'],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/attributes-order': ['error', { alphabetical: true }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { 'max-len': 'off' } // disables line length check for all html
    },
    {
      files: ['*.js', '*.ts'],
      'parser': '@typescript-eslint/parser'
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: { jest: true }
    }
  ]
};
