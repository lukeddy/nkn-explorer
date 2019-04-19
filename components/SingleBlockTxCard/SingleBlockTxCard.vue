<template>
  <Card>
    <div class="single-block-tx-card__header" @click="toggle()">
      <TransactionTypeTitle :type="tx.txType"/>
      <span
        class="single-block-tx-card__toggle fe fe-chevron-down"
        :class="isOpen ? 'single-block-tx-card__toggle_active' : null"
      />
    </div>
    <nuxt-link
      v-if="!isOpen"
      class="card__link text_size_xs text_wrap_none"
      :to="`/transactions/${tx.hash}`"
    >
      <span class="text_color_default">{{$t('hash')}}:</span>
      {{tx.hash}}
    </nuxt-link>
    <div
      class="single-block-tx-card__body"
      :class="isOpen ? 'single-block-tx-card__body_open' : null"
    >
      <!-- Mining Reward -->
      <template v-if="tx.txType ==='CoinbaseType' && txPayload">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__divider"></div>
        <div class="card__item">
          <div class="card__title">{{$t('miner')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/addresses/${txPayload.recipient}`"
          >{{txPayload.recipient}}</nuxt-link>
          <div class="card__text card__subitem">+ {{txPayload.amount | nknValue | commaNumber}} NKN</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('timestamp')}}</div>
          <div class="card__text text_size_md">{{txPayload.created_at}}</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('blockId')}}</div>
          <div class="card__text text_size_md">{{tx.block_id | commaNumber}}</div>
        </div>
      </template>

      <!-- Transfer -->
      <template v-if="tx.txType ==='TransferAssetType' && txPayload">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__divider"></div>
        <div class="card__item">
          <div class="card__title">{{$t('from')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/addresses/${txPayload.sender}`"
          >{{txPayload.sender}}</nuxt-link>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('amount')}}</div>
          <div class="card__text text_size_md">{{txPayload.amount | nknValue | commaNumber}} NKN</div>
          <div
            class="card__text card__subitem text_size_xs text_color_grey-light"
          >${{(this.$options.filters.nknValue(txPayload.amount) * price).toFixed(2) | commaNumber}}</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('to')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/addresses/${txPayload.recipient}`"
          >{{txPayload.recipient}}</nuxt-link>
        </div>
      </template>

      <!-- Sigchain -->
      <!-- <template v-if="tx.txType ==='CommitType'">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__item">
          <NodeTracing :nodeTracing="tx.node_tracing"/>
        </div>
      </template>-->
    </div>
  </Card>
</template>

<style lang="scss">
@import './SingleBlockTxCard.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import TransactionTypeTitle from '~/components/TransactionTypeTitle/TransactionTypeTitle'

// import NodeTracing from '~/components/NodeTracing/NodeTracing'

import { mapGetters } from 'vuex'

export default {
  components: { Card, TransactionTypeTitle },
  props: {
    tx: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return {
      isOpen: false,
      price: 0,
      txPayload: null
    }
  },
  computed: mapGetters({
    currentPrice: 'price/getCurrentPrice'
  }),
  mounted: function() {
    this.price = this.currentPrice.prices[0].price
  },
  methods: {
    toggle: function() {
      if (this.txPayload === null) {
        this.getTxPayload()
      }
      this.isOpen = !this.isOpen
    },
    getTxPayload: function() {
      const self = this

      this.$axios
        .$get(`transactions/${this.tx.id}/payload`)
        .then(function(response) {
          self.txPayload = response
        })
    }
  }
}
</script>
