<template>
  <Card>
    <div class="address-card">
      <nuxt-link class="address-card__header card__link" :to="`/addresses/${address.address}`">
        <Wallet class="address-card__icon"/>
        {{address.address}}
      </nuxt-link>
      <div class="address-card__item">{{$t('transactions')}}: {{address.transactions}}</div>
      <div
        class="address-card__item"
      >{{$t('latestTransaction')}}: {{ $moment(address.last_transaction).fromNow() }}</div>
    </div>
  </Card>
</template>

<style lang="scss">
@import './AddressCard';
</style>

<script>
import Card from '~/components/Card/Card'

import Wallet from '~/assets/icons/Wallet.svg'

export default {
  components: { Wallet, Card },
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
