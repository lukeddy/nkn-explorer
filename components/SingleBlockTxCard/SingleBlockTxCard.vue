<template>
  <Card>
    <div class="single-block-tx-card__header" @click="toggle()">
      <div
        v-if="tx.txType ==='CoinbaseType'"
        class="card__tx card__tx_type_reward"
      >{{$t('miningReward')}}</div>
      <div v-if="tx.txType ==='transfer'" class="card__tx card__tx_type_transfer">{{$t('transfer')}}</div>
      <div
        v-if="tx.txType ==='CommitType'"
        class="card__tx card__tx_type_sigchain"
      >{{$t('signatureChain')}}</div>
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
      <template v-if="tx.txType ==='CoinbaseType'">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__divider"></div>
        <div class="card__item">
          <div class="card__title">{{$t('miner')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/addresses/${tx.outputs[0].address}`"
          >{{tx.outputs[0].address}}</nuxt-link>
          <div class="card__text card__subitem">+ {{tx.outputs[0].value | commaNumber}} NKN</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('timestamp')}}</div>
          <div class="card__text text_size_md">{{tx.created_at}}</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('block')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/blocks/${tx.block_id}`"
          >{{tx.block_id | commaNumber}}</nuxt-link>
        </div>
      </template>

      <!-- Sigchain -->
      <template v-if="tx.txType ==='CommitType'">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__item">
          <NodeTracing :nodeTracing="tx.node_tracing"/>
        </div>
      </template>

      <!-- Transfer -->
      <template v-if="tx.txType ==='transfer'">
        <div class="card__item">
          <div class="card__title">{{$t('hash')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/transactions/${tx.hash}`">{{tx.hash}}</nuxt-link>
        </div>
        <div class="card__divider"></div>
        <div class="card__item">
          <div class="card__title">{{$t('from')}}</div>
          <nuxt-link class="card__link text_size_md" :to="`/addresses/${tx.sender}`">{{tx.sender}}</nuxt-link>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('amount')}}</div>
          <div class="card__text text_size_md">{{tx.outputs[0].value | commaNumber}} NKN</div>
          <div
            class="card__text card__subitem text_size_xs text_color_grey-light"
          >${{(tx.outputs[0].value * price).toFixed(2)}}</div>
        </div>
        <div class="card__item">
          <div class="card__title">{{$t('to')}}</div>
          <nuxt-link
            class="card__link text_size_md"
            :to="`/addresses/${tx.outputs[0].address}`"
          >{{tx.outputs[0].address}}</nuxt-link>
        </div>
      </template>
    </div>
  </Card>
</template>

<style lang="scss">
@import './SingleBlockTxCard.scss';
</style>

<script>
import Card from '~/components/Card/Card'
import NodeTracing from '~/components/NodeTracing/NodeTracing'

import { mapGetters } from 'vuex'

export default {
  components: { Card, NodeTracing },
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
      price: 0
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
      this.isOpen = !this.isOpen
    }
  }
}
</script>
