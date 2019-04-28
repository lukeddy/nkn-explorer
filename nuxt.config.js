import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'NKN Explorer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#0b163c' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:title', content: 'NKN Explorer' },
      {
        property: 'og:description',
        content:
          'With our NKN explorer you can easily browse the whole blockchain of the NKN Network.'
      },
      { property: 'og:image', content: '/thumbnail.jpg' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
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
    'nuxt-mq',

    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
          {
            code: 'de',
            iso: 'de-DE',
            file: 'de-DE.js'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          },
          {
            code: 'tr',
            iso: 'tr-TR',
            file: 'tr-TR.js'
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
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 320,
      md: 1200,
      lg: Infinity
    }
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
