<template>
  <div v-if="market && currentPrice && latestBlocks && latestTransactions">
    <template>
      <Header/>
      <nuxt/>
      <Footer/>
    </template>
  </div>
</template>
<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },
  computed: mapGetters({
    market: 'price/getMarketStats',
    currentPrice: 'price/getCurrentPrice',
    latestBlocks: 'latestBlocks/getLatestBlocks',
    latestTransactions: 'latestTransactions/getLatestTransactions'
  }),
  mounted: function() {
    this.$store.dispatch('price/getCurrentPrice')
    this.$store.dispatch('latestBlocks/getLatestBlocks')
    this.$store.dispatch('latestTransactions/getLatestTransactions')
  }
}
</script>
