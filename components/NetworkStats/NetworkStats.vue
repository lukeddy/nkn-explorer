<template>
  <div class="network-stats">
    <div class="network-stats__wrapper">
      <div class="network-stats__item">
        <h6 class="network-stats__title">{{$t('network')}} {{$t('nodes')}}</h6>
        <div class="network-stats__value">{{networkStats.totalNodes | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <h6 class="network-stats__title">{{$t('blocks')}}</h6>
        <div class="network-stats__value">{{networkStats.totalBlocks | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <h6 class="network-stats__title">{{$t('transactions')}}</h6>
        <div class="network-stats__value">{{networkStats.totalTransactions | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <h6 class="network-stats__title">{{$t('providers')}}</h6>
        <div class="network-stats__value">{{networkStats.totalProviders | commaNumber}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './NetworkStats';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data: () => {
    return {}
  },
  computed: mapGetters({ networkStats: 'network/getNetworkStats' }),
  mounted: function() {},
  methods: {}
}
</script>
