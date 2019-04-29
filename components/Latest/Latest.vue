<template>
  <div class="latest">
    <div class="latest__header">
      <h2>{{$t('latest')}} {{title}}</h2>
      <nuxt-link class="latest__all text_link" :to="localePath(link)">{{$t('viewAll')}}</nuxt-link>
    </div>
    <div class="latest__wrapper">
      <template v-if="type ==='blocks'">
        <LatestBlockCard v-for="block in latestBlocks" :key="block.id" :block="block"/>
      </template>
      <template v-if="type ==='transactions'">
        <LatestTransactionCard v-for="tx in latestTransactions" :key="tx.id" :tx="tx"/>
      </template>
    </div>
    <div class="latest__nav">
      <Button
        class="latest__button"
        type="router"
        :url="type==='blocks' ? 'blocks' : 'transactions'"
        theme="ghost"
      >{{$t('viewAll')}}</Button>
    </div>
  </div>
</template>

<style lang="scss">
@import './Latest';
</style>

<script>
import { mapGetters } from 'vuex'

import LatestBlockCard from '~/components/LatestBlockCard/LatestBlockCard'
import LatestTransactionCard from '~/components/LatestTransactionCard/LatestTransactionCard'
import Button from '~/components/Button/Button'

export default {
  components: { LatestBlockCard, LatestTransactionCard, Button },
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {}
  },
  computed: mapGetters({
    latestBlocks: 'latestBlocks/getLatestBlocks',
    latestTransactions: 'latestTransactions/getLatestTransactions'
  }),
  destroyed() {
    if (this.type == 'blocks') {
      clearInterval(this.intervalBlocks)
    } else if (this.type == 'transactions') {
      clearInterval(this.intervalTransactions)
    }
  },
  mounted: function() {
    if (this.type == 'blocks') {
      this.intervalBlocks = setInterval(this.updateBlocks, 10000)
    } else if (this.type == 'transactions') {
      this.intervalTransactions = setInterval(this.updateTransactions, 10000)
    }
  },
  methods: {
    updateBlocks() {
      this.$store.dispatch('latestBlocks/updateLatestBlocks')
    },
    updateTransactions() {
      this.$store.dispatch('latestTransactions/updateLatestTransactions')
    }
  }
}
</script>
