<template>
  <section class="section section_white">
    <div class="main-header">
      <h1 class="main-header__title text_color_white">NKN {{$t('block')}} {{$t('explorer')}}</h1>
      <div class="main-header__description">
        {{$t('searchFor')}}
        <nuxt-link class="text_link" to="/blocks">{{$t('block')}}</nuxt-link>,
        <nuxt-link class="text_link" to="/transactions">{{$t('transaction')}}</nuxt-link>&nbsp;
        or
        <nuxt-link class="text_link" to="/addresses">{{$t('address')}}</nuxt-link>
      </div>
      <div class="main-header__search-bar">
        <Search
          ref="searchField"
          class="main-header__search"
          :text="$t('singleSearch')"
          @sent="search()"
        />
        <Button
          class="main-header__search-button"
          theme="primary"
          type="button"
          :full="true"
          @clicked="search()"
        >{{$t('singleSearch')}}</Button>
      </div>
      <MarketStats class="main-header__market-stats"/>
    </div>
    <NetworkStats class="main-header__network-stats"/>
    <div class="latest__grid">
      <Latest :title="$t('blocks')" link="/blocks" type="blocks"/>
      <Latest :title="$t('transactions')" link="/transactions" type="transactions"/>
    </div>
    <NetworkNodes/>
  </section>
</template>

<script>
import Search from '~/components/Search/Search'
import Button from '~/components/Button/Button'
import MarketStats from '~/components/MarketStats/MarketStats'
import NetworkStats from '~/components/NetworkStats/NetworkStats'
import Latest from '~/components/Latest/Latest'
import NetworkNodes from '~/components/NetworkNodes/NetworkNodes'

export default {
  components: {
    Search,
    Button,
    MarketStats,
    NetworkStats,
    Latest,
    NetworkNodes
  },
  methods: {
    search() {
      let searchContext = this.$refs.searchField.searchContext
      let self = this
      if (searchContext.startsWith('NKN') && searchContext.length == 36) {
        this.$router.push('/addresses/' + searchContext)
      } else if (searchContext.length == 64) {
        this.$axios
          .$get(`transactions/${searchContext}`)
          .then(function(response) {
            if (!Object.entries(response).length) {
              self.$axios
                .$get(`blocks/${searchContext}`)
                .then(function(response) {
                  if (!Object.entries(response).length) {
                    console.log(self.$t('blockOrTransactionNotFound'))
                  } else {
                    self.$router.push('/blocks/' + searchContext)
                  }
                })
            } else {
              self.$router.push('/transactions/' + searchContext)
            }
          })
      } else if (!isNaN(searchContext) && searchContext.length) {
        this.$axios.$get(`blocks/${searchContext}`).then(function(response) {
          if (!Object.entries(response).length) {
            console.log(self.$t('blockHeightNotFound'))
          } else {
            self.$router.push('/blocks/' + searchContext)
          }
        })
      } else {
        console.log(self.$t('invalidData'))
      }
    }
  }
}
</script>
