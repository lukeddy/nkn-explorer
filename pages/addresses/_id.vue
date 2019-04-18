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
    <SingleAddressInfo v-if="activeGeneral" :address="address"/>
    <SingleAddressTransactions v-if="activeTx"/>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleAddressInfo from '~/components/SingleAddressInfo/SingleAddressInfo'
import SingleAddressTransactions from '~/components/SingleAddressTransactions/SingleAddressTransactions'
import CardSwitch from '~/components/CardSwitch/CardSwitch'

import Copy from '~/assets/icons/Copy.svg'

export default {
  components: {
    GetBack,
    SingleAddressInfo,
    CardSwitch,
    SingleAddressTransactions,
    Copy
  },
  data: () => {
    return {
      address: {
        address: 'NUPUc58Fk1dJxSgfdPvUtLp4kwyJTDpKFv',
        last_transaction: '2019-04-18 17:46:31',
        transactions: 152,
        first_transaction: '2019-02-27 05:39:08'
      },
      activeGeneral: true,
      activeTx: false
    }
  },
  mounted: function() {},
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
    }
  }
}
</script>
