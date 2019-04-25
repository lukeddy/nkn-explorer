<template>
  <div class="header" :class="isMobileMenuOpen ? 'header_open' : null">
    <Menu/>
  </div>
</template>

<style lang="scss">
@import './Header';
</style>

<script>
import Menu from '~/components/Menu/Menu'

import { mapGetters } from 'vuex'

export default {
  components: {
    Menu
  },
  computed: mapGetters({
    isMobileMenuOpen: 'mobileMenu/get'
  })
}
</script>
