<template>
  <Card>
    <div class="transaction-card">
      <div class="transaction-card__header">
        <TransactionTypeTitle :type="tx.txType"/>

        <div
          class="transaction-card__timestamp text_size_sm text_color_grey-light"
        >{{ $moment(tx.created_at).fromNow() }}</div>
      </div>
      <div class="transaction-card__item">
        {{$t('block')}}:&nbsp;
        <nuxt-link
          class="card__link text_wrap_none"
          :to="`/blocks/${tx.block_id - 1}`"
        >{{tx.block_id - 1}}</nuxt-link>
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
import TransactionTypeTitle from '~/components/TransactionTypeTitle/TransactionTypeTitle'

export default {
  components: { Card, TransactionTypeTitle },
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
