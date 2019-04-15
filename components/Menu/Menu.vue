<template>
  <div class="menu">
    <Burger class="menu__burger" @click="toggleMobileMenu()"/>
    <Logo/>
    <LanguageSelect/>
    <MobileMenu/>
  </div>
</template>

<style lang="scss">
@import './Menu';
</style>

<script>
import MobileMenu from '~/components/MobileMenu/MobileMenu'
import LanguageSelect from '~/components/LanguageSelect/LanguageSelect'

import Logo from '~/assets/icons/logo.svg'
import Burger from '~/assets/icons/Burger.svg'

export default {
  components: {
    MobileMenu,
    LanguageSelect,
    Logo,
    Burger
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {
    toggleMobileMenu() {
      this.$store.dispatch('mobileMenu/toggleMobileMenu')
    }
  }
}
</script>
