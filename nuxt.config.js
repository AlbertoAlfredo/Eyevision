export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Devido a problemas com o github pages mudar o router para o de cima na hora do deploy e depois voltar ao anterior
  router: {
  mode: 'hash',
    base: 'http://albertoalfredo.github.io/Eyevision/'
  },
  //Apos o deploy use a de baixo
  // router: {
  //   mode: 'hash',
  //   base: '/'
  // },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eyevision',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/normalize',
    '~/assets/style/style'
  ],
  // Config for Nuxt img
  image: {
    dir: 'static/images',
    staticFilename: '/images/[name][ext]'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devtool: true,
    debugger: true,

  },
}
