<template>
  <Card class="latest-card" :border="true">
    <div class="latest-card__header">
      <nuxt-link
        class="latest-card__title text_link text_weight_bold"
        :to="`/blocks/${block.hash}`"
      >
        <Block class="latest-card__icon"/>
        {{block.header.height | commaNumber}}
      </nuxt-link>
      <div
        class="text_size_xs text_color_grey-light"
      >{{ $moment(block.header.created_at).fromNow() }}</div>
    </div>
    <nuxt-link
      class="latest-card__address text_link text_size_sm text_wrap_none"
      :to="`/addresses/${block.header.wallet}`"
    >{{block.header.wallet}}</nuxt-link>
    <div class="latest-card__bottom">
      <div class="text_size_md">{{block.transactions_count}} {{$t('transactions')}}</div>
      <div
        class="latest-card__size text_size_md text_color_grey-light"
      >{{ block.size }} {{$t('bytes')}}</div>
    </div>
  </Card>
</template>

<style lang="scss">
@import './LatestBlockCard';
</style>

<script>
import Card from '~/components/Card/Card'
import Block from '~/assets/icons/Block.svg'

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
  methods: {}
}
</script>
