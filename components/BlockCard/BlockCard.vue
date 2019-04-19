<template>
  <Card>
    <div class="block-card">
      <div class="block-card__header">
        <nuxt-link
          class="block-card__height text_color_primary text_weight_bold"
          :to="`/blocks/${block.height}`"
        >
          <Block class="block-card__icon"/>
          {{block.height | commaNumber}}
        </nuxt-link>
        <div
          class="block-card__timestamp text_size_sm text_color_grey-light"
        >{{ $moment(block.timestamp).fromNow() }}</div>
        <div
          class="block-card__size text_size_sm text_color_grey-light"
        >{{block.size}} {{$t('bytes')}}</div>
      </div>
      <div class="block-card__txs text_size_sm">{{$t('transactions')}}: {{block.transactionCount}}</div>
      <div class="block-card__miner text_size_sm">
        {{$t('miner')}}:
        &nbsp;
        <nuxt-link
          class="block-card__address card__link"
          :to="`/addresses/${block.miner}`"
        >{{block.miner}}</nuxt-link>
      </div>
    </div>
  </Card>
</template>

<style lang="scss">
@import './BlockCard';
</style>

<script>
import Card from '~/components/Card/Card'

import Block from '~/assets/icons/Block.svg'

export default {
  components: { Card, Block },
  props: {
    block: {
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
