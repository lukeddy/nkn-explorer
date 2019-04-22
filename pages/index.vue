<template>
  <section class="container">
    <div class="main-header">
      <h1 class="main-header__title text_color_white">NKN {{$t('block')}} {{$t('explorer')}}</h1>
      <div class="main-header__description">
        {{$t('searchFor')}}
        <nuxt-link class="text_link" to="/blocks">{{$t('block')}}</nuxt-link>,
        <nuxt-link class="text_link" to="/transactions">{{$t('transaction')}}</nuxt-link>&nbsp;
        or
        <nuxt-link class="text_link" to="/addresses">{{$t('address')}}</nuxt-link>
      </div>
      <Search class="main-header__search" :text="$t('singleSearch')"/>
      <Button theme="primary" type="button">{{$t('singleSearch')}}</Button>
      <MarketStats class="main-header__market-stats"/>
    </div>
    <NetworkStats class="main-header__network-stats"/>
    <LatestBlocks/>
  </section>
</template>

<script>
import Search from '~/components/Search/Search'
import Button from '~/components/Button/Button'
import MarketStats from '~/components/MarketStats/MarketStats'
import NetworkStats from '~/components/NetworkStats/NetworkStats'
import LatestBlocks from '~/components/LatestBlocks/LatestBlocks'

export default {
  components: {
    Search,
    Button,
    MarketStats,
    NetworkStats,
    LatestBlocks
  }
}
</script>
