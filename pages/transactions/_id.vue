<template>
  <section class="container">
    <div class="single-page-header">
      <GetBack :text="$t('allTransactions')" route="/transactions"/>
      <div class="single-page-header__info">
        <h6 class="text_color_grey-light text_transform_uppercase">{{$t('transaction')}}</h6>
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
        <div class="text_opacity_75">
          <span v-if="loading">{{$t('loading')}}</span>
          <span v-else>
            {{$t('created')}}
            {{ $moment(tx.created_at).fromNow() }}
          </span>
        </div>
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
    <CardLoader v-if="loading" :count="5"/>
    <div v-else>
      <SingleTransactionInfo v-if="activeGeneral" :tx="tx"/>
      <SingleTransactionPayload v-if="activePayload" :tx="tx"/>
    </div>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleTransactionInfo from '~/components/SingleTransactionInfo/SingleTransactionInfo'
import SingleTransactionPayload from '~/components/SingleTransactionPayload/SingleTransactionPayload'
import CardSwitch from '~/components/CardSwitch/CardSwitch'
import CardLoader from '~/components/Loaders/CardLoader'

export default {
  components: {
    GetBack,
    SingleTransactionInfo,
    SingleTransactionPayload,
    CardSwitch,
    CardLoader
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
