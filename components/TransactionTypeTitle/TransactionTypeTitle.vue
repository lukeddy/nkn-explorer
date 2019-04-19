<template>
  <div :class="`card__tx card__tx_type_${className}`">{{$t(title)}}</div>
</template>

<style lang="scss">
@import './TransactionTypeTitle.scss';
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      title: '',
      className: ''
    }
  },
  mounted: function() {
    const type = this.type

    switch (type) {
      case 'CoinbaseType':
        this.title = 'miningReward'
        this.className = 'reward'
        break
      case 'TransferAssetType':
        this.title = 'transfer'
        this.className = 'transfer'
        break
      case 'CommitType':
        this.title = 'signatureChain'
        this.className = 'sigchain'
        break
      case 'SubscribeType':
        this.title = 'subscription'
        this.className = 'subscription'
        break
      case 'RegisterNameType':
        this.title = 'walletNameRegistration'
        this.className = 'wallet-name-registration'
        break
      case 'TransferNameType':
        this.title = 'walletNameTransfer'
        this.className = 'wallet-name-transfer'
        break
      case 'DeleteNameType':
        this.title = 'walletNameDeletion'
        this.className = 'wallet-name-deletion'
        break
      default:
        return false
    }
  },
  methods: {}
}
</script>
