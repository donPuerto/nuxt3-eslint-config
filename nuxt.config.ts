// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/devtools', '@nuxt/eslint'],
  // typescript: {
  //   typeCheck: true,
  // },
  eslint: {
    // options here
    config: {
      stylistic: true, // <---
    },
  },
})
