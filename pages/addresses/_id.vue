<template>
  <section class="section">
    <div class="single-page-header">
      <div class="single-page-header__wrapper">
        <GetBack :text="$t('allAddresses')" route="/addresses"/>
        <div class="single-page-header__left">
          <Wallet class="single-page-header__icon"/>
          <div class="single-page-header__info">
            <h1 class="single-page-header__title">{{ $t('addressDetails')}}</h1>
            <div v-clipboard:copy="$route.params.id" class="single-page-header__address">
              {{$route.params.id}}
              <Copy class="single-page-header__address-copy"/>
            </div>
          </div>
        </div>
        <div v-if="address.balance" class="single-page-header__right">
          <div class="single-page-header__tx-number">{{address.balance}} NKN</div>
          <div
            class="single-page-header__tx-price"
          >${{(address.balance * currentPrice).toFixed(2) | commaNumber}}</div>
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
    </div>

    <mq-layout :mq="['sm','md']">
      <template v-if="!loading">
        <SingleAddressInfo v-if="activeGeneral" :address="address"/>
        <SingleAddressTransactions v-if="activeTx" :address="address"/>
      </template>
      <CardLoader v-else :count="5"/>
    </mq-layout>

    <mq-layout mq="lg">
      <DesktopWrapper>
        <TableLoader v-if="loading" :count="5"/>
        <DesktopAddressInfo v-if="!loading" :address="address"/>
        <DesktopAddressTransactions v-if="!loading" :address="address"/>
      </DesktopWrapper>
    </mq-layout>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleAddressInfo from '~/components/SingleAddressInfo/SingleAddressInfo'
import SingleAddressTransactions from '~/components/SingleAddressTransactions/SingleAddressTransactions'
import CardSwitch from '~/components/CardSwitch/CardSwitch'
import CardLoader from '~/components/Loaders/CardLoader'
import TableLoader from '~/components/Loaders/TableLoader'

import DesktopWrapper from '~/components/DesktopWrapper/DesktopWrapper'
import DesktopAddressInfo from '~/components/DesktopAddressInfo/DesktopAddressInfo'
import DesktopAddressTransactions from '~/components/DesktopAddressTransactions/DesktopAddressTransactions'

import Copy from '@/assets/icons/Copy.svg'
import Wallet from '@/assets/icons/Wallet.svg'

import { mapGetters } from 'vuex'

export default {
  components: {
    GetBack,
    SingleAddressInfo,
    CardSwitch,
    SingleAddressTransactions,
    Copy,
    Wallet,
    CardLoader,
    TableLoader,
    DesktopWrapper,
    DesktopAddressInfo,
    DesktopAddressTransactions
  },
  data: () => {
    return {
      address: {},
      loading: true,
      activeGeneral: true,
      activeTx: false
    }
  },
  computed: mapGetters({
    currentPrice: 'price/getCurrentPrice'
  }),
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
