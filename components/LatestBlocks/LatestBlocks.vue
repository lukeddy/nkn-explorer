<template>
  <div class="latest-blocks">
    <div class="latest-blocks__header">
      <h2>{{$t('latestBlocks')}}</h2>
      <nuxt-link class="text_link" to="/blocks">{{$t('viewAll')}}</nuxt-link>
    </div>
    <div class="latest-blocks__wrapper">
      <LatestBlockCard v-for="block in latestBlocks" :key="block.id" :block="block"/>
    </div>
  </div>
</template>

<style lang="scss">
@import './LatestBlocks';
</style>

<script>
import { mapGetters } from 'vuex'

import LatestBlockCard from '~/components/LatestBlockCard/LatestBlockCard'

export default {
  components: { LatestBlockCard },
  data: () => {
    return {}
  },
  computed: mapGetters({
    latestBlocks: 'latestBlocks/getLatestBlocks'
  }),
  mounted: function() {},
  methods: {}
}
</script>
