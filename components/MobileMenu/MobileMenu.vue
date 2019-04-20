<template>
  <div class="mobile-menu" :class="isMobileMenuOpen ? 'mobile-menu_open' : null">
    <Search :text="$t('search')"/>
    <div class="mobile-menu__nav">
      <nuxt-link
        v-for="route in routes"
        :key="route.title"
        :to="route.path"
        class="mobile-menu__nav-item"
        @click.native="toggleMobileMenu()"
      >
        <component :is="route.icon" class="mobile-menu__nav-icon"></component>
        {{route.title}}
      </nuxt-link>
    </div>
    <h3 class="mobile-menu__title">{{$t('about')}}</h3>
    <p
      class="mobile-menu__descr"
    >NKN is a New Kind of Network, a Cellular Automata powered, decentralized data relay network built on Blockchain & incentivized by a native token.</p>
    <div class="mobile-menu__stats">
      <div class="mobile-menu__stats-item">{{networkNodes}} {{$t('nodes')}}</div>
      <div class="mobile-menu__stats-item">{{networkCountries}} {{$t('differentCountries')}}</div>
      <div class="mobile-menu__stats-item">{{networkProviders}} {{$t('providers')}}</div>
    </div>
    <Button theme="primary" url="https://nknx.org/" type="link">{{$t('joinTheNetwork')}}</Button>
  </div>
</template>

<style lang="scss">
@import './MobileMenu';
</style>

<script>
import Search from '~/components/Search/Search'
import LanguageSelect from '~/components/LanguageSelect/LanguageSelect'
import Button from '~/components/Button/Button'

import Close from '~/assets/icons/close.svg'
import Home from '~/assets/icons/Home.svg'
import Network from '~/assets/icons/Network.svg'
import Block from '~/assets/icons/Block.svg'
import Transaction from '~/assets/icons/Transaction.svg'
import Sigchain from '~/assets/icons/Sigchain.svg'
import Address from '~/assets/icons/Address.svg'

import { mapGetters } from 'vuex'

export default {
  components: {
    Search,
    LanguageSelect,
    Close,
    Home,
    Network,
    Block,
    Transaction,
    Sigchain,
    Address,
    Button
  },
  data: () => {
    return {
      routes: [
        {
          path: '/',
          icon: 'Home',
          title: 'Home'
        },
        {
          path: '/blocks',
          icon: 'Block',
          title: 'Blocks'
        },
        {
          path: '/transactions',
          icon: 'Transaction',
          title: 'Transactions'
        },
        {
          path: '/addresses',
          icon: 'Address',
          title: 'Addresses'
        }
      ],
      networkNodes: 10000,
      networkCountries: 42,
      networkProviders: 231
    }
  },
  computed: mapGetters({
    isMobileMenuOpen: 'mobileMenu/get'
  }),
  mounted: function() {},
  methods: {
    toggleMobileMenu() {
      this.$store.dispatch('mobileMenu/toggleMobileMenu')
    }
  }
}
</script>
