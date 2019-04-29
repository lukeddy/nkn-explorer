<template>
  <section class="section">
    <div class="single-page-header">
      <div class="single-page-header__wrapper">
        <GetBack :text="$t('allTransactions')" route="/transactions"/>
        <Transaction
          v-if="!loading"
          class="single-page-header__icon"
          :class="'single-page-header__icon_' + (tx.txType  == 'CoinbaseType' ? 'mining' : tx.txType  == 'TransferAssetType' ? 'transfer' : tx.txType  == 'CommitType' ? 'sigchain' : tx.txType  == 'SubscribeType' ? 'sigchain' : tx.txType  == 'RegisterNameType' ? 'wallet-name-registration' : tx.txType  == 'TransferNameType' ? 'wallet-name-transfer' : tx.txType  == 'DeleteNameType' ? 'wallet-name-deletion' : null)"
        />
        <div class="single-page-header__info">
          <h6
            class="single-page-header__subtitle text_color_grey-light text_transform_uppercase"
          >{{$t('transaction')}}</h6>
          <h1 class="single-page-header__title">
            <span v-if="loading">{{$t('loading')}}</span>
            <span v-else-if="tx.txType == 'CoinbaseType'">{{$t('miningReward')}}</span>
            <span v-else-if="tx.txType == 'TransferAssetType'">{{$t('transfer')}}</span>
            <span v-else-if="tx.txType == 'CommitType'">{{$t('signatureChain')}}</span>
            <span v-else-if="tx.txType == 'SubscribeType'">{{$t('subscription')}}</span>
            <span v-else-if="tx.txType == 'RegisterNameType'">{{$t('walletNameRegistration')}}</span>
            <span v-else-if="tx.txType == 'TransferNameType'">{{$t('walletNameTransfer')}}</span>
            <span v-else-if="tx.txType == 'DeleteNameType'">{{$t('walletNameDeletion')}}</span>
          </h1>
          <span class="text_opacity_75">
            <span v-if="loading">{{$t('loading')}}</span>
            <span v-else>
              {{$t('created')}}
              {{ $moment(tx.created_at+"Z").fromNow() }}
            </span>
          </span>
          <div v-if="!loading" class="single-page-header__hash">{{tx.hash}}</div>
        </div>
        <div class="single-page-header__switches">
          <CardSwitch
            :active="activeGeneral"
            @click.native="toggleSwitch('activeGeneral')"
          >{{$t('generalInfo')}}</CardSwitch>
          <CardSwitch
            :active="activePayload"
            @click.native="toggleSwitch('activePayload')"
          >{{$t('payload')}}</CardSwitch>
        </div>
      </div>
    </div>
    <mq-layout :mq="['sm','md']">
      <CardLoader v-if="loading" :count="5"/>
      <div v-else>
        <SingleTransactionInfo v-if="activeGeneral" :tx="tx"/>
        <SingleTransactionPayload v-if="activePayload" :tx="tx"/>
      </div>
    </mq-layout>

    <mq-layout mq="lg">
      <DesktopWrapper>
        <TableLoader v-if="loading" :count="10"/>
        <DesktopTransactionInfo v-if="!loading" :tx="tx"/>
        <DesktopTransactionPayload v-if="!loading" :tx="tx"/>
      </DesktopWrapper>
    </mq-layout>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleTransactionInfo from '~/components/SingleTransactionInfo/SingleTransactionInfo'
import SingleTransactionPayload from '~/components/SingleTransactionPayload/SingleTransactionPayload'
import CardSwitch from '~/components/CardSwitch/CardSwitch'
import CardLoader from '~/components/Loaders/CardLoader'
import TableLoader from '~/components/Loaders/TableLoader'

import DesktopWrapper from '~/components/DesktopWrapper/DesktopWrapper'
import DesktopTransactionInfo from '~/components/DesktopTransactionInfo/DesktopTransactionInfo'
import DesktopTransactionPayload from '~/components/DesktopTransactionPayload/DesktopTransactionPayload'

import Transaction from '@/assets/icons/Transaction.svg'

export default {
  components: {
    GetBack,
    SingleTransactionInfo,
    SingleTransactionPayload,
    CardSwitch,
    CardLoader,
    Transaction,
    TableLoader,
    DesktopWrapper,
    DesktopTransactionInfo,
    DesktopTransactionPayload
  },
  data: () => {
    return {
      loading: true,
      tx: null,
      activeGeneral: true,
      activePayload: false
    }
  },
  mounted: function() {
    this.getTx()
  },
  methods: {
    toggleSwitch(name) {
      switch (name) {
        case 'activeGeneral':
          this.activeGeneral = true
          this.activePayload = false
          break
        case 'activePayload':
          this.activePayload = true
          this.activeGeneral = false
          break
        default:
      }
    },
    getTx: function() {
      const self = this
      const txHash = this.$route.params.id

      this.$axios.$get(`transactions/${txHash}`).then(function(response) {
        self.tx = response
        self.loading = false
      })
    }
  }
}
</script>
