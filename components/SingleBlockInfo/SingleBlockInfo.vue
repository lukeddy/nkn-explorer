<template>
  <CardContainer>
    <Card width="half">
      <div class="card__title">{{$t('height')}}</div>
      <div class="card__text">{{block.height | commaNumber}}</div>
    </Card>
    <Card width="half">
      <div class="card__title">{{$t('transactions')}}</div>
      <div class="card__text">{{block.transactionCount}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('size')}}</div>
      <div class="card__text">{{block.size}} {{$t('bytes')}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('timestamp')}}</div>
      <div class="card__text">{{block.timestamp}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('rewardedMinerAddress')}}</div>
      <nuxt-link class="card__link" :to="`/addresses/${block.miner}`">{{block.miner}}</nuxt-link>
    </Card>
    <Card>
      <div class="card__title">{{$t('hash')}}</div>
      <div class="card__text">{{block.hash}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('transactionRoot')}}</div>
      <div class="card__text">{{block.transactionRoot}}</div>
    </Card>
  </CardContainer>
</template>

<style lang="scss">
@import './SingleBlockInfo.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import CardContainer from '~/components/CardContainer/CardContainer'

export default {
  components: { Card, CardContainer },
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
