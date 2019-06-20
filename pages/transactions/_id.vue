<template>
  <section class="section">
    <div class="single-page-header">
      <div class="single-page-header__wrapper">
        <GetBack :text="$t('allTransactions')" route="transactions"/>
        <div class="single-page-header__left">
          <Transaction
            v-if="!loading"
            class="single-page-header__icon"
            :class="'single-page-header__icon_' + (tx.txType  == 'COINBASE_TYPE' ? 'mining' : tx.txType  == 'TRANSFER_ASSET_TYPE' ? 'transfer' : tx.txType  == 'SIG_CHAIN_TXN_TYPE' ? 'sigchain' : tx.txType  == 'SUBSCRIBE_TYPE' ? 'subscription' : tx.txType == 'GENERATE_ID_TYPE' ? 'generate-id' : tx.txType  == 'REGISTER_NAME_TYPE' ? 'wallet-name-registration' : tx.txType  == 'TRANSFER_NAME_TYPE' ? 'wallet-name-transfer' : tx.txType  == 'DELETE_NAME_TYPE' ? 'wallet-name-deletion' : null)"
          />
          <div class="single-page-header__info">
            <h6
              class="single-page-header__subtitle text_color_grey-light text_transform_uppercase"
            >{{$t('transaction')}}</h6>
            <h1 class="single-page-header__title">
              <span v-if="loading">{{$t('loading')}}</span>
              <span v-else-if="tx.txType == 'COINBASE_TYPE'">{{$t('miningReward')}}</span>
              <span v-else-if="tx.txType == 'TRANSFER_ASSET_TYPE'">{{$t('transfer')}}</span>
              <span v-else-if="tx.txType == 'SIG_CHAIN_TXN_TYPE'">{{$t('signatureChain')}}</span>
              <span v-else-if="tx.txType == 'SUBSCRIBE_TYPE'">{{$t('subscription')}}</span>
              <span v-else-if="tx.txType == 'GENERATE_ID_TYPE'">{{$t('generateId')}}</span>
              <span v-else-if="tx.txType == 'REGISTER_NAME_TYPE'">{{$t('walletNameRegistration')}}</span>
              <span v-else-if="tx.txType == 'TRANSFER_NAME_TYPE'">{{$t('walletNameTransfer')}}</span>
              <span v-else-if="tx.txType == 'DELETE_NAME_TYPE'">{{$t('walletNameDeletion')}}</span>
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
        </div>

        <mq-layout mq="lg">
          <template v-if="txPayload && $refs.payload">
            <template v-if="$refs.payload.txPayload !=null ">
              <div
                v-if="$refs.payload.txPayload.payloadType == 'TRANSFER_ASSET_TYPE' || $refs.payload.txPayload.payloadType == 'COINBASE_TYPE' "
                class="single-page-header__right"
              >
                <div
                  class="single-page-header__tx-number"
                >{{$refs.payload.txPayload.amount | nknValue | commaNumber}} NKN</div>
                <div
                  class="single-page-header__tx-price"
                >${{(this.$options.filters.nknValue($refs.payload.txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</div>
              </div>
            </template>
          </template>
        </mq-layout>

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
        <DesktopTransactionPayload v-if="!loading" ref="payload" :tx="tx"/>
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

import { mapGetters } from 'vuex'

export default {
  transition: 'expand',
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
      activePayload: false,
      txPayload: false
    }
  },
  computed: mapGetters({
    currentPrice: 'price/getCurrentPrice'
  }),
  updated() {
    if (this.$refs.payload) {
      this.txPayload = true
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
