<template>
  <div class="network-stats">
    <div class="network-stats__wrapper">
      <div class="network-stats__item">
        <div class="network-stats__title">{{$t('network')}} {{$t('nodes')}}</div>
        <div class="network-stats__value">{{8331 | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <div class="network-stats__title">{{$t('block')}}</div>
        <div class="network-stats__value">{{8331 | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <div class="network-stats__title">{{$t('transactions')}}</div>
        <div class="network-stats__value">{{8331 | commaNumber}}</div>
      </div>
      <div class="network-stats__item">
        <div class="network-stats__title">{{$t('tps')}}</div>
        <div class="network-stats__value">{{8331 | commaNumber}}</div>
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
  computed: mapGetters({}),
  mounted: function() {},
  methods: {}
}
</script>
