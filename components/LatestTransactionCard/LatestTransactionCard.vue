<template>
  <Card class="latest-card" :border="true">
    <nuxt-link :to="`/transactions/${tx.hash}`">
      <div class="latest-card__mobile">
        <div class="latest-card__header">
          <TransactionTypeTitle :type="tx.txType" class="latest-card__title"/>
          <div class="text_size_xs text_color_grey-light">{{ $moment(tx.created_at+"Z").fromNow() }}</div>
        </div>
        <nuxt-link
          class="latest-card__address text_link text_size_sm text_wrap_none"
          :to="`/transactions/${tx.hash}`"
        >{{tx.hash}}</nuxt-link>
        <div class="latest-card__bottom">
          <Block class="latest-card__icon latest-card__icon_small"/>
          <nuxt-link
            :to="`/blocks/${tx.block_height}`"
            class="text_link text_size_sm text_color_grey-light"
          >{{ tx.block_height | commaNumber}}</nuxt-link>
        </div>
      </div>
      <div class="latest-card__desktop">
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
@import './LatestTransactionCard';
</style>

<script>
import Card from '~/components/Card/Card'
import Block from '@/assets/icons/Block.svg'
import TransactionTypeTitle from '~/components/TransactionTypeTitle/TransactionTypeTitle'

export default {
  components: { Card, Block, TransactionTypeTitle },
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
  methods: {}
}
</script>
