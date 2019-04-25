<template>
  <Card>
    <nuxt-link :to="`/transactions/${tx.hash}`">
      <div class="transaction-card">
        <div class="transaction-card__header">
          <TransactionTypeTitle :type="tx.txType"/>
          <div
            class="transaction-card__timestamp text_size_sm text_color_grey-light"
          >{{ $moment(tx.created_at+"Z").fromNow() }}</div>
        </div>
        <div class="transaction-card__item">
          {{$t('block')}}:&nbsp;
          <nuxt-link
            class="text_link text_wrap_none"
            :to="`/blocks/${tx.block_height}`"
          >{{tx.block_height | commaNumber}}</nuxt-link>
        </div>
        <div class="transaction-card__item">
          {{$t('hash')}}:&nbsp;
          <nuxt-link class="text_link text_wrap_none" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
      </div>
    </nuxt-link>
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
