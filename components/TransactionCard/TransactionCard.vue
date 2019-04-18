<template>
  <Card>
    <div class="transaction-card">
      <div class="transaction-card__header">
        <div
          v-if="tx.txType ==='CoinbaseType'"
          class="card__tx card__tx_type_reward"
        >{{$t('miningReward')}}</div>
        <div
          v-if="tx.txType ==='transfer'"
          class="card__tx card__tx_type_transfer"
        >{{$t('transfer')}}</div>
        <div
          v-if="tx.txType ==='CommitType'"
          class="card__tx card__tx_type_sigchain"
        >{{$t('signatureChain')}}</div>
        <div
          class="transaction-card__timestamp text_size_sm text_color_grey-light"
        >{{ $moment(tx.timestamp).fromNow() }}</div>
      </div>
      <div class="transaction-card__item">
        {{$t('block')}}:&nbsp;
        <nuxt-link class="card__link text_wrap_none" :to="`/blocks/${tx.block_id}`">{{tx.block_id}}</nuxt-link>
      </div>
      <div class="transaction-card__item">
        {{$t('hash')}}:&nbsp;
        <nuxt-link class="card__link text_wrap_none" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
      </div>
    </div>
  </Card>
</template>

<style lang="scss">
@import './TransactionCard';
</style>

<script>
import Card from '~/components/Card/Card'

export default {
  components: { Card },
  props: {
    tx: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {}
}
</script>
