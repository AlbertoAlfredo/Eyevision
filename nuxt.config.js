export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // para o deploy funcionar, caso esteja usando um repositorio diferente do root, coloque o nome correto do repositório
  router: {
  mode: 'hash',
    base: '/Eyevision/'
  },


//Lembrar de fazer o predeploy (nuxt build, nuxt generate), antes de mudar as configurações para subir para o github


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
    dir: 'assets/images',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    "vue-simple-alert",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devtool: true,
    debugger: true,

  },
}
