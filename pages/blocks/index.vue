<template>
  <section class="container">
    <div>
      <CardContainer>
        <BlockCard v-for="block in blocksSample" :key="block.height" :block="block"/>
      </CardContainer>
    </div>
  </section>
</template>

<script>
import BlockCard from '~/components/BlockCard/BlockCard'
import CardContainer from '~/components/CardContainer/CardContainer'

export default {
  components: { BlockCard, CardContainer },
  data: () => {
    return {
      next_page: null,
      prev_page: null,
      current_page: 1,
      latestBlocks: [],
      blocksSample: [
        {
          height: 777694,
          timestamp: '2019-04-16 12:30:04',
          miner: 'NL7QxfhKbahCCDyRZbPyYzEUtSmwAXPkkF',
          size: 2266,
          hash:
            '3b1d2d82c6af6a583ca9159814826f400eb50607710778819094a3f90b51573e',
          transactionsRoot:
            'd7b6e739917892e64162e8cc639ce2764604f06d7622cedb5a3409adfb8d4523',
          transactionCount: 2
        },
        {
          height: 777693,
          timestamp: '2019-04-16 12:30:04',
          miner: 'NL7QxfhKbahCCDyRZbPyYzEUtSmwAXPkkF',
          size: 2266,
          hash:
            '3b1d2d82c6af6a583ca9159814826f400eb50607710778819094a3f90b51573e',
          transactionsRoot:
            'd7b6e739917892e64162e8cc639ce2764604f06d7622cedb5a3409adfb8d4523',
          transactionCount: 2
        }
      ]
    }
  },
  mounted() {
    this.getLatestBlocks()
  },
  methods: {
    getLatestBlocks() {
      const self = this
      this.$axios.$get('https://api.nknx.org/blocks').then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestBlocks = response.data
      })
    },
    getNextBlockPage() {
      const self = this
      this.$axios.$get(this.next_page).then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestBlocks = response.data
      })
    },
    getPrevBlockPage() {
      const self = this
      this.$axios.$get(this.prev_page).then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestBlocks = response.data
      })
    }
  }
}
</script>
