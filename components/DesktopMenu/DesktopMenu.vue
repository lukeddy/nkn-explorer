<template>
  <div class="desktop-menu">
    <nuxt-link
      v-for="route in routes"
      :key="route.title"
      :to="localePath(route.path)"
      class="desktop-menu__item"
      :exact="route.path=='index' ? true : false"
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
          path: 'index',
          title: 'home'
        },
        {
          path: 'blocks',
          title: 'blocks'
        },
        {
          path: 'transactions',
          title: 'transactions'
        },
        {
          path: 'addresses',
          title: 'addresses'
        },
        {
          path: 'ips',
          title: 'node_check'
        }
      ]
    }
  },

  mounted: function() {},
  methods: {}
}
</script>
