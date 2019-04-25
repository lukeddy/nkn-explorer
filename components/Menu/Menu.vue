<template>
  <div class="menu">
    <Burger/>
    <nuxt-link to="/" class="menu__logo"><Logo/></nuxt-link>
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
import Burger from '~/components/Burger/Burger'

import Logo from '@/assets/icons/logo.svg'

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
  methods: {}
}
</script>
