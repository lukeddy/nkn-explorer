import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/reset.css',
    '@/assets/scss/main.scss',
    '~/assets/css/feather.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/filters.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    '@nuxtjs/moment',
    'nuxt-clipboard2',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          }
        ],
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],
  /*
   ** Style Resources module configuration
   */
  styleResources: {
    scss: [
      '~/assets/scss/_app.variables.scss',
      '~/assets/scss/_app.mixins.scss'
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://api2.nknx.org/'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['comma-number'],

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
