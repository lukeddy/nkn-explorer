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
          <h4 class="page-header__stats-value text_color_white">{{avgSize}}</h4>
        </div>
      </div>
    </div>
    <CardContainer>
      <TransactionFilter :filters="filters" :activeFilter="activeFilter" @update="updateFilters"/>
      <CardLoader v-if="loading" :count="10" :container="false"/>
      <TransactionCard v-for="tx in transactions" v-else :key="tx.id" :tx="tx"/>
    </CardContainer>

    <div v-if="transactions.length > 0" class="page-navigation">
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
import TransactionFilter from '~/components/TransactionFilter/TransactionFilter'

export default {
  components: {
    TransactionCard,
    CardContainer,
    Pagination,
    CardLoader,
    TransactionFilter
  },
  data: () => {
    return {
      loading: true,
      nextPage: null,
      prevPage: null,
      current_page: 1,
      from: 0,
      to: 0,
      sumTransactions: 0,
      avgSize: 0,
      filters: [
        {
          title: 'allTransactions',
          value: 'all'
        },
        {
          title: 'miningReward',
          value: 'CoinbaseType'
        },
        {
          title: 'transfer',
          value: 'TransferAssetType'
        },
        {
          title: 'signatureChain',
          value: 'CommitType'
        },
        {
          title: 'subscription',
          value: 'SubscribeType'
        },
        {
          title: 'walletNameRegistration',
          value: 'RegisterNameType'
        },
        {
          title: 'walletNameTransfer',
          value: 'TransferNameType'
        },
        {
          title: 'walletNameDeletion',
          value: 'DeleteNameType'
        }
      ],
      activeFilter: {
        title: 'allTransactions',
        value: 'all'
      },
      transactions: []
    }
  },
  mounted() {
    this.getTransactions(this.current_page)
  },
  methods: {
    updateFilters(filter) {
      this.activeFilter = filter
      this.getTransactions(this.current_page)
    },
    getTransactions(page) {
      const self = this
      const filter = self.activeFilter.value

      self.loading = true

      // Checking if page exists
      if (page === null) {
        return false
      }

      // Making query depending on filter
      const query =
        filter === 'all'
          ? `transactions?page=${page}`
          : `transactions?page=${page}&txType=${filter}`

      // Disabling pagination untill data fetched
      self.nextPage = null
      self.prevPage = null

      // Fetcing data
      this.$axios.$get(query).then(function(response) {
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

        self.loading = false
      })
    }
  }
}
</script>
