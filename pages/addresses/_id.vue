<template>
  <section class="container">
    <div class="single-page-header">
      <GetBack :text="$t('allAddresses')" route="/addresses"/>
      <div class="single-page-header__info">
        <h1 class="single-page-header__title">{{ $t('addressDetails')}}</h1>
        <div v-clipboard:copy="$route.params.id" class="single-page-header__address">
          {{$route.params.id}}
          <Copy class="single-page-header__address-copy"/>
        </div>
      </div>
      <div class="single-page-header__switches">
        <CardSwitch
          :active="activeGeneral"
          @click.native="toggleSwitch('activeGeneral')"
        >{{$t('generalInfo')}}</CardSwitch>
        <CardSwitch
          :active="activeTx"
          @click.native="toggleSwitch('activeTx')"
        >{{$t('transactions')}}</CardSwitch>
      </div>
    </div>
    <template v-if="!loading">
      <SingleAddressInfo v-if="activeGeneral" :address="address"/>
      <SingleAddressTransactions v-if="activeTx" :address="address"/>
    </template>
    <CardLoader v-else :count="5"/>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleAddressInfo from '~/components/SingleAddressInfo/SingleAddressInfo'
import SingleAddressTransactions from '~/components/SingleAddressTransactions/SingleAddressTransactions'
import CardSwitch from '~/components/CardSwitch/CardSwitch'
import CardLoader from '~/components/Loaders/CardLoader'

import Copy from '@/assets/icons/Copy.svg'

export default {
  components: {
    GetBack,
    SingleAddressInfo,
    CardSwitch,
    SingleAddressTransactions,
    Copy,
    CardLoader
  },
  data: () => {
    return {
      address: {},
      loading: true,
      activeGeneral: true,
      activeTx: false
    }
  },
  mounted: function() {
    this.getAddress()
  },
  methods: {
    toggleSwitch(name) {
      switch (name) {
        case 'activeGeneral':
          this.activeGeneral = true
          this.activeTx = false
          break
        case 'activeTx':
          this.activeTx = true
          this.activeGeneral = false
          break
        default:
      }
    },
    getAddress: function() {
      const self = this
      const walletAddress = this.$route.params.id
      this.$axios.$get(`addresses/${walletAddress}`).then(function(response) {
        self.address = response
        self.loading = false
      })
    }
  }
}
</script>
