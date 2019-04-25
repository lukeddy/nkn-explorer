<template>
  <div
    v-if="market && currentPrice && latestBlocks && latestTransactions && dailyHistoryPrice && networkCities && networkCountries && networkStats && latestSigchain"
  >
    <template>
      <Header/>
      <nuxt v-if="!isMobileMenuOpen"/>
      <Footer/>
    </template>
  </div>
  <Preloader v-else/>
</template>
<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Preloader from '~/components/Preloader/Preloader'

import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Footer,
    Preloader
  },
  computed: mapGetters({
    market: 'price/getMarketStats',
    currentPrice: 'price/getCurrentPrice',
    latestBlocks: 'latestBlocks/getLatestBlocks',
    latestTransactions: 'latestTransactions/getLatestTransactions',
    dailyHistoryPrice: 'price/getDailyHistoryPrice',
    networkCities: 'network/getNetworkCities',
    networkCountries: 'network/getNetworkCountries',
    networkStats: 'network/getNetworkStats',
    latestSigchain: 'latestSigchain/getLatestSigchain',
    isMobileMenuOpen: 'mobileMenu/get'
  }),
  mounted: function() {
    this.$store.dispatch('price/getCurrentPrice')
    this.$store.dispatch('latestBlocks/getLatestBlocks')
    this.$store.dispatch('latestTransactions/getLatestTransactions')
    this.$store.dispatch('price/getDailyHistoryPrice')
    this.$store.dispatch('network/getNetworkCities')
    this.$store.dispatch('network/getNetworkCountries')
    this.$store.dispatch('network/getNetworkStats')
    this.$store.dispatch('latestSigchain/getLatestSigchain')
  }
}
</script>
