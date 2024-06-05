// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/no-multiple-template-root': 'error',
      'vue/multi-word-component-names': 'error',
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/component-tags-order': [
        'error',
        { order: ['script', 'template', 'style'] },
      ],
    },

  },
)
// .override(
//   'nuxt/typescript',
//   {
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/ban-ts-comment': [
//         'error',
//         {
//           'ts-expect-error': 'allow-with-description',
//           'ts-ignore': 'allow-with-description',
//           'ts-nocheck': false,
//           'ts-check': false,
//         },
//       ],
//     },
//   },
// )
