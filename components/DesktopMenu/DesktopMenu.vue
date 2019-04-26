<template>
  <div class="desktop-menu">
    <nuxt-link
      v-for="route in routes"
      :key="route.title"
      :to="route.path"
      class="desktop-menu__item"
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
          title: 'Home'
        },
        {
          path: '/blocks',
          title: 'Blocks'
        },
        {
          path: '/transactions',
          title: 'Transactions'
        },
        {
          path: '/addresses',
          title: 'Addresses'
        }
      ]
    }
  },

  mounted: function() {},
  methods: {}
}
</script>
