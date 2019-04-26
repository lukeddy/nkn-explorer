<template>
  <div class="menu">
    <Burger/>
    <div class="menu__left">
      <nuxt-link to="/" class="menu__logo">
        <Logo/>
        <span class="menu__title">NKN</span>
      </nuxt-link>
      <DesktopMenu/>
    </div>
    <div class="menu__right">
      <Search class="menu__search" :text="$t('search')" type="ghost"/>
      <div class="menu__divider"></div>
      <Button class="menu__mining-button" type="link" url="https://nknx.org">
        <Mining class="menu__mining-button-icon"/>
        {{$t('startMining')}}
      </Button>
      <LanguageSelect/>
    </div>
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
import DesktopMenu from '~/components/DesktopMenu/DesktopMenu'
import Search from '~/components/Search/Search'
import Button from '~/components/Button/Button'

import Logo from '@/assets/icons/logo.svg'
import Mining from '@/assets/icons/mining.svg'

export default {
  components: {
    MobileMenu,
    LanguageSelect,
    Logo,
    Burger,
    DesktopMenu,
    Search,
    Button,
    Mining
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {}
}
</script>
