<template>
  <div>
    <h2 class="desktop-heading">{{$t('Payload')}}</h2>

    <!-- Mining Reward -->
    <DesktopCardContainer
      v-if="tx.txType ==='CoinbaseType' && txPayload"
      class="desktop-block-transactions"
    >
      <DesktopCard width="half">
        <div class="card__title">{{$t('rewardedAddress')}}</div>
        <div class="desktop-card__item">
          <nuxt-link
            class="text_link"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
          >{{txPayload.recipientWallet}}</nuxt-link>
        </div>
      </DesktopCard>
      <DesktopCard width="half">
        <div class="card__title">{{$t('amount')}}</div>
        <div class="desktop-card__item desktop-card__item_flex">
          <span>+ {{txPayload.amount | nknValue | commaNumber}} NKN</span>
          <span
            class="text_color_grey-light"
          >${{(this.$options.filters.nknValue(txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</span>
        </div>
      </DesktopCard>
    </DesktopCardContainer>

    <!-- Transfer -->
    <DesktopCardContainer
      v-if="tx.txType ==='TransferAssetType' && txPayload"
      class="desktop-block-transactions"
    >
      <DesktopCard width="third">
        <div class="card__title">{{$t('from')}}</div>
        <div class="desktop-card__item">
          <nuxt-link
            class="text_link"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.senderWallet} })"
          >{{txPayload.senderWallet}}</nuxt-link>
        </div>
      </DesktopCard>
      <DesktopCard width="third">
        <div class="card__title">{{$t('amount')}}</div>
        <div class="desktop-card__item">
          <div>{{txPayload.amount | nknValue | commaNumber}} NKN</div>
          <div
            class="text_color_grey-light text_size_md"
          >${{(this.$options.filters.nknValue(txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</div>
        </div>
      </DesktopCard>
      <DesktopCard width="third">
        <div class="card__title">{{$t('to_send')}}</div>
        <div class="desktop-card__item">
          <nuxt-link
            class="text_link"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
          >{{txPayload.recipientWallet}}</nuxt-link>
        </div>
      </DesktopCard>
    </DesktopCardContainer>

    <!-- Sigchain -->
    <template v-if="tx.txType ==='CommitType' && txPayload">
      <NodeTracing
        class="desktop-transaction-payload__sigchain"
        :sigchain="txPayload.sigchain"
        :showChain="true"
        :spacing="true"
      />
    </template>

    <!-- Subscription -->
    <DesktopCardContainer
      v-if="tx.txType ==='SubscribeType' && txPayload"
      class="desktop-block-transactions"
    >
      <DesktopCard width="full">
        <div class="card__title">{{$t('subscriber')}}</div>
        <div class="desktop-card__item">{{txPayload.subscriber}}</div>
      </DesktopCard>
      <DesktopCard width="quarter">
        <div class="card__title">{{$t('identifier')}}</div>
        <div class="desktop-card__item">{{txPayload.identifier | hexConverter}}</div>
      </DesktopCard>
      <DesktopCard width="quarter">
        <div class="card__title">{{$t('topic')}}</div>
        <div class="desktop-card__item">{{txPayload.topic | hexConverter}}</div>
      </DesktopCard>
      <DesktopCard width="quarter">
        <div class="card__title">{{$t('bucket')}}</div>
        <div class="desktop-card__item">{{txPayload.bucket}}</div>
      </DesktopCard>
      <DesktopCard width="quarter">
        <div class="card__title">{{$t('duration')}}</div>
        <div class="desktop-card__item">{{txPayload.duration}}</div>
      </DesktopCard>
      <DesktopCard v-if="txPayload.meta.length > 0" width="full">
        <div class="card__title">{{$t('meta')}}</div>
        <div class="desktop-card__item">{{txPayload.meta}}</div>
      </DesktopCard>
    </DesktopCardContainer>

    <!-- Name Registration -->
    <DesktopCardContainer
      v-if="tx.txType ==='RegisterNameType' && txPayload"
      class="desktop-block-transactions"
    >
      <DesktopCard width="half">
        <div class="card__title">{{$t('registrant')}}</div>
        <div class="desktop-card__item">
          <nuxt-link
            class="text_link text_wrap_none"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
          >{{txPayload.registrantWallet}}</nuxt-link>
        </div>
      </DesktopCard>
      <DesktopCard width="half">
        <div class="card__title">{{$t('registeredName')}}</div>
        <div class="desktop-card__item">{{txPayload.name | hexConverter}}</div>
      </DesktopCard>
    </DesktopCardContainer>

    <!-- Name Deletion -->
    <DesktopCardContainer
      v-if="tx.txType ==='DeleteNameType' && txPayload"
      class="desktop-block-transactions"
    >
      <DesktopCard width="half">
        <div class="card__title">{{$t('registrant')}}</div>
        <div class="desktop-card__item">
          <nuxt-link
            class="text_link text_wrap_none"
            :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
          >{{txPayload.registrantWallet}}</nuxt-link>
        </div>
      </DesktopCard>
      <DesktopCard width="half">
        <div class="card__title">{{$t('deletedName')}}</div>
        <div class="desktop-card__item">{{txPayload.name | hexConverter}}</div>
      </DesktopCard>
    </DesktopCardContainer>
  </div>
</template>

<style lang="scss">
@import './DesktopTransactionPayload.scss';
</style>

<script>
import DesktopCard from '~/components/DesktopCard/DesktopCard'
import DesktopCardContainer from '~/components/DesktopCardContainer/DesktopCardContainer'
import NodeTracing from '~/components/NodeTracing/NodeTracing'

import { mapGetters } from 'vuex'

export default {
  components: { DesktopCard, DesktopCardContainer, NodeTracing },
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
