<template>
  <Card class="latest-block">
    <div class="latest-block__header">
      <nuxt-link
        class="latest-block__title text_link text_weight_bold"
        :to="`/blocks/${block.hash}`"
      >
        <Block class="latest-block__icon"/>
        {{block.header.height | commaNumber}}
      </nuxt-link>
      <div
        class="text_size_xs text_color_grey-light"
      >{{ $moment(block.header.created_at).fromNow() }}</div>
    </div>
    <nuxt-link
      class="latest-block__address text_link text_size_xs text_wrap_none"
      :to="`/addresses/${block.header.wallet}`"
    >{{block.header.wallet}}</nuxt-link>
    <div class="latest-block__bottom">
      <div class="text_size_md">{{block.transactions_count}} {{$t('transactions')}}</div>
      <div
        class="latest-block__size text_size_md text_color_grey-light"
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
