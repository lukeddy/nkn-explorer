<template>
  <div class="market-stats">
    <div class="market-stats__item">
      <div class="market-stats__header">
        <div class="market-stats__title">New Kind of Network (NKN)</div>
        <div class="market-stats__rank">#{{market.cmc_rank}}</div>
      </div>
      <div class="market-stats__number">
        ${{currentPrice.toFixed(6)}}
        <span
          class="market-stats__change"
          :class="market.prices[0].percent_change_24h > 0 ? 'market-stats__change_positive' : 'market-stats__change_negative'"
        >
          <span v-if="market.prices[0].percent_change_24h > 0">+</span>
          <span v-else>-</span>
          {{market.prices[0].percent_change_24h.toFixed(2)}}%
        </span>
      </div>
    </div>
    <MarketChart class="market-stats__chart"/>
  </div>
</template>

<style lang="scss">
@import './MarketStats';
</style>

<script>
import { mapGetters } from 'vuex'
import MarketChart from '~/components/Charts/MarketChart'

export default {
  components: { MarketChart },
  data: () => {
    return {
      usdPrice: 0
    }
  },
  computed: mapGetters({
    market: 'price/getMarketStats',
    currentPrice: 'price/getCurrentPrice'
  }),
  mounted: function() {},
  methods: {}
}
</script>
