<template>
  <CardContainer>
    <Card class="single-address-info__balance">
      <div class="card__title">{{$t('balance')}}</div>
      <div class="card__text">{{111000 | commaNumber}} NKN</div>
      <Logo class="single-address-info__logo"/>
    </Card>
    <Card>
      <div class="card__title">{{$t('firstTransactions')}}</div>
      <div class="card__text">{{address.first_transaction}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('latestTransaction')}}</div>
      <div class="card__text">{{address.last_transaction}}</div>
    </Card>
    <Card>
      <div class="card__title">{{$t('totalTransactions')}}</div>
      <div class="card__text">{{address.count_transactions}}</div>
    </Card>
  </CardContainer>
</template>

<style lang="scss">
@import './SingleAddressInfo.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import CardContainer from '~/components/CardContainer/CardContainer'

import Logo from '~/assets/icons/logo.svg'

export default {
  components: { Card, CardContainer, Logo },
  props: {
    address: {
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
