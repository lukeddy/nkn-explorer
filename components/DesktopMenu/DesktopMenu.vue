<template>
  <div class="desktop-menu">
    <nuxt-link
      v-for="route in routes"
      :key="route.title"
      :to="route.path"
      class="desktop-menu__item"
      :exact="route.path=='/' ? true : false"
    >{{$t(route.title)}}</nuxt-link>
  </div>
</template>

<style lang="scss">
@import './DesktopMenu';
</style>

<script>
export default {
  components: {},
  data: () => {
    return {
      routes: [
        {
          path: '/',
          title: 'home'
        },
        {
          path: '/blocks',
          title: 'blocks'
        },
        {
          path: '/transactions',
          title: 'transactions'
        },
        {
          path: '/addresses',
          title: 'addresses'
        }
      ]
    }
  },

  mounted: function() {},
  methods: {}
}
</script>
