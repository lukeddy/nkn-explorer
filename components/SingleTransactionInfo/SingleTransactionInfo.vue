<template>
  <CardContainer>
    <Card width="half">
      <div class="card__title">{{$t('fee')}}</div>
      <div class="card__text">{{tx.fee}}</div>
    </Card>
    <Card width="half">
      <div class="card__title">{{$t('nonce')}}</div>
      <div class="card__text">{{tx.nonce}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('attributes')}}</div>
      <div class="card__text">{{tx.attributes}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('hash')}}</div>
      <div class="card__text">{{tx.hash}}</div>
    </Card>
  </CardContainer>
</template>

<style lang="scss">
@import './SingleTransactionInfo.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import CardContainer from '~/components/CardContainer/CardContainer'

export default {
  components: { Card, CardContainer },
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
