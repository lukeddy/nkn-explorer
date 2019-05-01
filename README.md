# nkn-explorer [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5530e891d37e4c259e7ffa64d548b452)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CrackDavid/nkn-explorer&amp;utm_campaign=Badge_Grade)

> A neat explorer for the NKN blockchain

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Checking for missing translations

``yarn vue-i18n-extract report -v "./layouts/**/*.?(js|vue)" -l "./lang/*.?(js|json)"``
