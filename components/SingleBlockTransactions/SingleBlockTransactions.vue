<template>
  <div>
    <CardLoader v-if="loading" :count="5"/>
    <CardContainer else>
      <SingleBlockTxCard v-for="tx in transactions" :key="tx.id" :tx="tx"/>
    </CardContainer>
    <div v-if="transactions.length > 0" class="page-navigation">
      <div
        class="page-navigation__info"
      >{{$t('showing')}} {{from}} {{$t('to')}} {{to}} {{$t('of')}} {{txCount | commaNumber}}</div>
      <div class="page-navigation__pagination">
        <Pagination :page="prevPage" type="prev" @click.native="getBlockTransactions(prevPage)"/>
        <Pagination :page="nextPage" type="next" @click.native="getBlockTransactions(nextPage)"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './SingleBlockTransactions.scss';
</style>

<script>
import CardContainer from '~/components/CardContainer/CardContainer'
import SingleBlockTxCard from '~/components/SingleBlockTxCard/SingleBlockTxCard'
import CardLoader from '~/components/Loaders/CardLoader'
import Pagination from '~/components/Pagination/Pagination'

export default {
  components: { CardContainer, SingleBlockTxCard, CardLoader, Pagination },
  props: {
    blockId: {
      type: Number,
      default: 0
    },
    txCount: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      transactions: [],
      loading: true,
      nextPage: null,
      prevPage: null,
      current_page: 1,
      from: 0,
      to: 0
    }
  },
  mounted: function() {
    this.getBlockTransactions(this.current_page)
  },
  methods: {
    getBlockTransactions(page) {
      const self = this

      this.$axios
        .$get(`blocks/${this.blockId}/transactions2?page=${page}`)
        .then(function(response) {
          const {
            data,
            current_page,
            prev_page_url,
            next_page_url,
            from,
            to
          } = response

          self.transactions = data

          self.from = from
          self.to = to
          self.currentPage = current_page
          self.prevPage = prev_page_url != null ? self.currentPage - 1 : null
          self.nextPage = next_page_url != null ? self.currentPage + 1 : null

          self.loading = false
        })
    }
  }
}
</script>
