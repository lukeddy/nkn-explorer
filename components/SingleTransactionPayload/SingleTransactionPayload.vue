<template>
  <div>
    <CardLoader v-if="loading" :count="5"/>

    <!-- Mining Reward -->
    <CardContainer v-if="tx.txType ==='CoinbaseType' && !loading">
      <Card>
        <div class="card__title">{{$t('miner')}}</div>
        <nuxt-link
          class="card__link"
          :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
        >{{txPayload.recipientWallet}}</nuxt-link>
      </Card>
      <Card>
        <div class="card__title">{{$t('amount')}}</div>
        <div class="card__text">+ {{txPayload.amount | nknValue | commaNumber}} NKN</div>
        <div
          class="card__text card__subitem text_size_xs text_color_grey-light"
        >${{(this.$options.filters.nknValue(txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</div>
      </Card>
    </CardContainer>

    <!-- Transfer -->
    <CardContainer v-if="tx.txType ==='TransferAssetType' && !loading">
      <Card>
        <div class="card__title">{{$t('from')}}</div>
        <nuxt-link
          class="card__link"
          :to="localePath({ name: 'addresses-id', params: { id: txPayload.senderWallet} })"
        >{{txPayload.senderWallet}}</nuxt-link>
      </Card>
      <Card>
        <div class="card__title">{{$t('amount')}}</div>
        <div class="card__text text_size_md">{{txPayload.amount | nknValue | commaNumber}} NKN</div>
        <div
          class="card__text card__subitem text_size_xs text_color_grey-light"
        >${{(this.$options.filters.nknValue(txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</div>
      </Card>
      <Card>
        <div class="card__title">{{$t('to_send')}}</div>
        <nuxt-link
          class="card__link text_size_md"
          :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
        >{{txPayload.recipientWallet}}</nuxt-link>
      </Card>
    </CardContainer>

    <!-- Sigchain -->
    <template v-if="tx.txType ==='CommitType' && !loading">
      <CardContainer>
        <Card>
          <div class="card__title">{{$t('dataSize')}}</div>
          <div class="card__text">{{txPayload.sigchain.dataSize}} {{$t('bytes')}}</div>
        </Card>
        <Card>
          <div class="card__title">{{$t('dataHash')}}</div>
          <div class="card__text">{{txPayload.sigchain.dataHash}}</div>
        </Card>
      </CardContainer>
      <NodeTracing :sigchain="txPayload.sigchain" :spacing="true" :showChain="true"/>
    </template>

    <!-- Name Registration -->
    <CardContainer v-if="tx.txType ==='RegisterNameType' && !loading">
      <Card>
        <div class="card__title">{{$t('registeredName')}}</div>
        <div class="card__text">{{txPayload.name | walletName}}</div>
      </Card>
      <Card>
        <div class="card__title">{{$t('registrant')}}</div>
        <div class="card__text">
          <nuxt-link
            class="text_link text_wrap_none"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
          >{{txPayload.registrantWallet}}</nuxt-link>
        </div>
      </Card>
    </CardContainer>

    <!-- Name Deletion -->
    <CardContainer v-if="tx.txType ==='DeleteNameType' && !loading">
      <Card>
        <div class="card__title">{{$t('deletedName')}}</div>
        <div class="card__text">{{txPayload.name | walletName}}</div>
      </Card>
      <Card>
        <div class="card__title">{{$t('registrant')}}</div>
        <div class="card__text">
          <nuxt-link
            class="text_link text_wrap_none"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
          >{{txPayload.registrantWallet}}</nuxt-link>
        </div>
      </Card>
    </CardContainer>
  </div>
</template>

<style lang="scss">
@import './SingleTransactionPayload.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import CardContainer from '~/components/CardContainer/CardContainer'
import NodeTracing from '~/components/NodeTracing/NodeTracing'
import CardLoader from '~/components/Loaders/CardLoader'

import { mapGetters } from 'vuex'

export default {
  components: { Card, CardContainer, CardLoader, NodeTracing },
  props: {
    tx: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return { loading: true, txPayload: null }
  },
  computed: mapGetters({
    currentPrice: 'price/getCurrentPrice'
  }),
  mounted: function() {
    this.getTxPayload()
  },
  methods: {
    getTxPayload: function() {
      const self = this
      this.$axios
        .$get(`transactions/${this.tx.id}/payload`)
        .then(function(response) {
          self.txPayload = response
          self.loading = false
        })
    }
  }
}
</script>
