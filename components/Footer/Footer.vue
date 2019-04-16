<template>
  <footer class="footer">
    <StartMining/>
    <div class="footer__nav">
      <div v-for="nav in navigation" :key="nav.title" class="footer__nav-item">
        <div class="footer__nav-title">{{nav.title}}</div>
        <a
          v-for="link in nav.links"
          :key="link.title"
          class="footer__nav-link"
          :href="link.url"
          target="_blank"
        >{{link.title}}</a>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-item">© NKN Explorer 2019</div>
    </div>
  </footer>
</template>

<style lang="scss">
@import './Footer';
</style>


<script>
import StartMining from '~/components/StartMining/StartMining'

export default {
  components: {
    StartMining
  },

  data: () => {
    return {
      navigation: [
        {
          title: 'Company',
          links: [
            {
              title: 'About',
              url: 'https://www.nkn.org/#/about'
            },
            {
              title: 'Official Website',
              url: 'https://www.nkn.org/'
            }
          ]
        },
        {
          title: 'Community',
          links: [
            {
              title: 'NKNx Node Manager',
              url: 'https://www.nknx.org'
            },
            {
              title: 'NKN Wallet',
              url: 'https://nknwallet.io'
            }
          ]
        }
      ]
    }
  }
}
</script>
