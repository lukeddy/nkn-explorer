<template>
  <section class="container">
    <div class="page-header">
      <h1 class="page-header__title text_color_white">{{$t('transactions')}}</h1>
      <div class="page-header__stats">
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('total')}}</h6>
          <h4 class="page-header__stats-value text_color_white">{{sumTransactions | commaNumber}}</h4>
        </div>
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('avgTxBlock')}}</h6>
          <h4 class="page-header__stats-value text_color_white">
            {{avgSize}}
            <span
              class="page-header__stats-index text_color_white text_size_sm text_opacity_75"
            >{{$t('bytes')}}</span>
          </h4>
        </div>
      </div>
    </div>
    <CardLoader v-if="!transactions.length" :count="10"/>
    <CardContainer v-else>
      <TransactionCard v-for="tx in transactions" :key="tx.id" :tx="tx"/>
    </CardContainer>
    <div class="page-navigation">
      <div
        class="page-navigation__info"
      >{{$t('showing')}} {{from}} {{$t('to')}} {{to}} {{$t('of')}} {{sumTransactions}}</div>
      <div class="page-navigation__pagination">
        <Pagination :page="prevPage" type="prev" @click.native="getTransactions(prevPage)"/>
        <Pagination :page="nextPage" type="next" @click.native="getTransactions(nextPage)"/>
      </div>
    </div>
  </section>
</template>

<script>
import TransactionCard from '~/components/TransactionCard/TransactionCard'
import CardContainer from '~/components/CardContainer/CardContainer'
import CardLoader from '~/components/Loaders/CardLoader'
import Pagination from '~/components/Pagination/Pagination'

export default {
  components: { TransactionCard, CardContainer, Pagination, CardLoader },
  data: () => {
    return {
      nextPage: null,
      prevPage: null,
      current_page: 1,
      from: 0,
      to: 0,
      sumTransactions: 0,
      avgSize: 0,
      transactions: []
    }
  },
  mounted() {
    this.getTransactions(this.current_page)
  },
  methods: {
    getTransactions(page) {
      const self = this

      // Checking if page exists
      if (page === null) {
        return false
      }

      // Disabling pagination untill data fetched
      self.nextPage = null
      self.prevPage = null

      // Fetcing data
      this.$axios.$get(`transactions?page=${page}`).then(function(response) {
        const { avgSize, sumTransactions, transactions } = response
        const {
          data,
          current_page,
          prev_page_url,
          next_page_url,
          from,
          to
        } = transactions

        self.avgSize = avgSize
        self.sumTransactions = sumTransactions
        self.transactions = data

        self.from = from
        self.to = to
        self.currentPage = current_page

        self.prevPage = prev_page_url != null ? self.currentPage - 1 : null
        self.nextPage = next_page_url != null ? self.currentPage + 1 : null
      })
    }
  }
}
</script>
