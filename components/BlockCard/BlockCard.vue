<template>
  <Card>
    <div class="block-card">
      <div class="block-card__header">
        <div class="block-card__height text_color_primary text_weight_bold">
          <Block class="block-card__icon"/>
          {{numberWithCommas(block.height)}}
        </div>
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
        <span class="block-card__address text_color_primary">{{block.miner}}</span>
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
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>
