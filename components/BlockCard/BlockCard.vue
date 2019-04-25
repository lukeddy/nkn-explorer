<template>
  <Card>
    <nuxt-link :to="`/blocks/${block.hash}`">
      <div class="block-card">
        <div class="block-card__header">
          <nuxt-link
            class="block-card__height text_color_primary text_weight_bold"
            :to="`/blocks/${block.hash}`"
          >
            <Block class="block-card__icon"/>
            {{block.header.height | commaNumber}}
          </nuxt-link>
          <div
            class="block-card__timestamp text_size_sm text_color_grey-light"
          >{{ $moment(block.header.created_at).fromNow() }}</div>
          <div
            class="block-card__size text_size_sm text_color_grey-light"
          >{{block.size}} {{$t('bytes')}}</div>
        </div>
        <div
          class="block-card__txs text_size_sm"
        >{{$t('transactions')}}: {{block.transactions_count}}</div>
        <div class="block-card__miner text_size_sm">
          {{$t('rewardedAddress')}}:
          <nuxt-link
            v-if="block.header.benificiaryWallet"
            class="block-card__address text_link text_wrap_none"
            :to="`/addresses/${block.header.benificiaryWallet}`"
          >&nbsp;{{block.header.benificiaryWallet}}</nuxt-link>
          <nuxt-link
            v-else
            class="block-card__address text_link text_wrap_none"
            :to="`/addresses/${block.header.wallet}`"
          >&nbsp;{{block.header.wallet}}</nuxt-link>
        </div>
      </div>
    </nuxt-link>
  </Card>
</template>

<style lang="scss">
@import './BlockCard';
</style>

<script>
import Card from '~/components/Card/Card'

import Block from '@/assets/icons/Block.svg'

export default {
  components: { Card, Block },
  props: {
    block: {
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
