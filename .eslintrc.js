module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'eslint-comments'
  ],
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['**.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: [
          './tsconfig.json',
          './packages/*/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
  ],
};
