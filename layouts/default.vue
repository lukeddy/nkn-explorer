<template>
  <div
    v-if="market && currentPrice && latestBlocks && latestTransactions && dailyHistoryPrice && networkCities && networkCountries && networkStats && latestSigchain"
  >
    <template>
      <Header/>
      <nuxt/>
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
  destroyed() {
    clearInterval(this.intervalPrice)
    clearInterval(this.intervalBlocks)
    clearInterval(this.intervalTransactions)
    clearInterval(this.intervalDailyHistoryPrice)
    clearInterval(this.intervalNetworkCities)
    clearInterval(this.intervalNetworkCountries)
    clearInterval(this.intervalNetworkStats)
    clearInterval(this.intervalLatestSigchain)
  },
  mounted: function() {
    this.updatePrice()
    this.updateBlocks()
    this.updateTransactions()
    this.updateDailyHistoryPrice()
    this.updateNetworkCountries()
    this.updateNetworkCities()
    this.updateNetworkStats()
    this.updateLatestSigchain()

    this.intervalPrice = setInterval(this.updatePrice, 300000)
    this.intervalBlocks = setInterval(this.updateBlocks, 10000)
    this.intervalTransactions = setInterval(this.updateTransactions, 10000)
    this.intervalDailyHistoryPrice = setInterval(
      this.updateDailyHistoryPrice,
      300000
    )
    this.intervalNetworkCities = setInterval(this.updateNetworkCities, 60000)
    this.intervalNetworkCountries = setInterval(
      this.updateNetworkCountries,
      60000
    )
    this.intervalNetworkStats = setInterval(this.updateNetworkStats, 60000)
    this.intervalLatestSigchain = setInterval(this.updateLatestSigchain, 10000)
  },
  methods: {
    updatePrice() {
      this.$store.dispatch('price/updateCurrentPrice')
    },
    updateBlocks() {
      this.$store.dispatch('latestBlocks/updateLatestBlocks')
    },
    updateTransactions() {
      this.$store.dispatch('latestTransactions/updateLatestTransactions')
    },
    updateDailyHistoryPrice() {
      this.$store.dispatch('price/updateDailyHistoryPrice')
    },
    updateNetworkCities() {
      this.$store.dispatch('network/updateNetworkCities')
    },
    updateNetworkCountries() {
      this.$store.dispatch('network/updateNetworkCountries')
    },
    updateNetworkStats() {
      this.$store.dispatch('network/updateNetworkStats')
    },
    updateLatestSigchain() {
      this.$store.dispatch('latestSigchain/updateLatestSigchain')
    }
  }
}
</script>
