<template>
  <Card>
    <nuxt-link :to="localePath({ name: 'addresses-id', params: { id: address.address } })">
      <div class="address-card">
        <div class="address-card__header">
          <Wallet class="address-card__icon"/>
          <nuxt-link
            class="text_link text_wrap_none"
            :to="localePath({ name: 'addresses-id', params: { id: address.address } })"
          >{{address.address}}</nuxt-link>
        </div>
        <div
          class="address-card__item"
        >{{$t('transactions')}}: {{address.count_transactions | commaNumber}}</div>
        <div
          class="address-card__item"
        >{{$t('latestTransaction')}}: {{ $moment(address.last_transaction+"Z").fromNow() }}</div>
      </div>
    </nuxt-link>
  </Card>
</template>

<style lang="scss">
@import './AddressCard';
</style>

<script>
import Card from '~/components/Card/Card'

import Wallet from '@/assets/icons/Wallet.svg'

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
