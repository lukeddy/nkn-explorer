<template>
  <Card>
    <div class="transaction-card">
      <div class="transaction-card__header">
        <!-- Mining Reward -->
        <div
          v-if="tx.txType ==='CoinbaseType'"
          class="card__tx card__tx_type_reward"
        >{{$t('miningReward')}}</div>

        <!-- Transfer -->
        <div
          v-if="tx.txType ==='TransferAssetType'"
          class="card__tx card__tx_type_transfer"
        >{{$t('transfer')}}</div>

        <!-- Sigchain -->
        <div
          v-if="tx.txType ==='CommitType'"
          class="card__tx card__tx_type_sigchain"
        >{{$t('signatureChain')}}</div>

        <!-- Subscription -->
        <div
          v-if="tx.txType ==='SubscribeType'"
          class="card__tx card__tx_type_subscription"
        >{{$t('subscription')}}</div>

        <!-- Wallet Name Registration -->
        <div
          v-if="tx.txType ==='RegisterNameType'"
          class="card__tx card__tx_type_wallet-name-registration"
        >{{$t('walletNameRegistration')}}</div>

        <div
          class="transaction-card__timestamp text_size_sm text_color_grey-light"
        >{{ $moment(tx.created_at).fromNow() }}</div>
      </div>
      <div class="transaction-card__item">
        {{$t('block')}}:&nbsp;
        <nuxt-link
          class="card__link text_wrap_none"
          :to="`/blocks/${tx.block_id - 1}`"
        >{{tx.block_id - 1}}</nuxt-link>
      </div>
      <div class="transaction-card__item">
        {{$t('hash')}}:&nbsp;
        <nuxt-link class="card__link text_wrap_none" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
      </div>
    </div>
  </Card>
</template>

<style lang="scss">
@import './TransactionCard';
</style>

<script>
import Card from '~/components/Card/Card'

export default {
  components: { Card },
  props: {
    tx: {
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
