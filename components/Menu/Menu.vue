<template>
  <div class="menu">
    <Burger/>
    <div class="menu__left">
      <nuxt-link :to="localePath('index')" class="menu__logo">
        <Logo/>
        <span class="menu__title">NKN</span>
      </nuxt-link>
      <DesktopMenu/>
    </div>
    <div class="menu__right">
      <Search
        ref="searchField"
        class="menu__search"
        :text="$t('search')"
        type="ghost"
        @sent="search()"
      />
      <div class="menu__divider"></div>
      <Button class="menu__mining-button" type="link" url="https://nknx.org">
        <Mining class="menu__mining-button-icon"/>
        {{$t('startMining')}}
      </Button>
      <LanguageSelect/>
    </div>
    <MobileMenu/>
  </div>
</template>

<style lang="scss">
@import './Menu';
</style>

<script>
import MobileMenu from '~/components/MobileMenu/MobileMenu'
import LanguageSelect from '~/components/LanguageSelect/LanguageSelect'
import Burger from '~/components/Burger/Burger'
import DesktopMenu from '~/components/DesktopMenu/DesktopMenu'
import Search from '~/components/Search/Search'
import Button from '~/components/Button/Button'

import Logo from '@/assets/icons/logo.svg'
import Mining from '@/assets/icons/mining.svg'

export default {
  components: {
    MobileMenu,
    LanguageSelect,
    Logo,
    Burger,
    DesktopMenu,
    Search,
    Button,
    Mining
  },
  data: () => {
    return {}
  },
  mounted: function() {},
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
                    self.$router.push(
                      self.localePath({
                        name: 'blocks-id',
                        params: { id: searchContext }
                      })
                    )
                  }
                })
            } else {
              self.$router.push(
                self.localePath({
                  name: 'transactions-id',
                  params: { id: searchContext }
                })
              )
            }
          })
      } else if (!isNaN(searchContext) && searchContext.length) {
        this.$axios.$get(`blocks/${searchContext}`).then(function(response) {
          if (!Object.entries(response).length) {
            console.log(self.$t('blockHeightNotFound'))
          } else {
            self.$router.push(
              self.localePath({
                name: 'blocks-id',
                params: { id: searchContext }
              })
            )
          }
        })
      } else {
        console.log(self.$t('invalidData'))
      }
    }
  }
}
</script>
