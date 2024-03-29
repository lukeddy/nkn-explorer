<template>
  <section class="section">
    <div class="page-header">
      <div class="page-header__wrapper">
        <div class="page-header__left">
          <h1 class="page-header__title text_color_white">{{$t('transactions')}}</h1>
          <div class="page-header__stats">
            <div class="page-header__stats-item">
              <h6
                class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
              >{{$t('total')}}</h6>
              <h4
                class="page-header__stats-value text_color_white"
              >{{sumTransactions | commaNumber}}</h4>
            </div>
            <div class="page-header__stats-item">
              <h6
                class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
              >{{$t('avgTxBlock')}}</h6>
              <h4 class="page-header__stats-value text_color_white">{{avgSize}}</h4>
            </div>
          </div>
        </div>
        <div class="page-header__right"></div>

        <mq-layout mq="lg">
          <DesktopTransactionFilter
            :filters="filters"
            :activeFilter="activeFilter"
            @update="updateFilters"
          />
        </mq-layout>
      </div>
    </div>

    <mq-layout :mq="['sm','md']">
      <CardContainer class="expand-container">
        <TransactionFilter :filters="filters" :activeFilter="activeFilter" @update="updateFilters"/>
        <CardLoader v-if="loading" :count="10" :container="false"/>
        <TransactionCard v-for="tx in transactions" v-else :key="tx.id" :tx="tx"/>
      </CardContainer>
    </mq-layout>

    <mq-layout mq="lg">
      <DesktopWrapper :margin="false">
        <TableLoader v-if="loading" :count="10"/>
        <DesktopTransactions v-else :transactions="transactions"/>
      </DesktopWrapper>
    </mq-layout>

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
import TableLoader from '~/components/Loaders/TableLoader'
import Pagination from '~/components/Pagination/Pagination'
import TransactionFilter from '~/components/TransactionFilter/TransactionFilter'

import DesktopWrapper from '~/components/DesktopWrapper/DesktopWrapper'
import DesktopTransactions from '~/components/DesktopTransactions/DesktopTransactions'
import DesktopTransactionFilter from '~/components/DesktopTransactionFilter/DesktopTransactionFilter'

export default {
  components: {
    TransactionCard,
    CardContainer,
    Pagination,
    CardLoader,
    TransactionFilter,
    DesktopWrapper,
    DesktopTransactions,
    TableLoader,
    DesktopTransactionFilter
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
          value: 'COINBASE_TYPE'
        },
        {
          title: 'transfer',
          value: 'TRANSFER_ASSET_TYPE'
        },
        {
          title: 'signatureChain',
          value: 'SIG_CHAIN_TXN_TYPE'
        },
        {
          title: 'subscription',
          value: 'SUBSCRIBE_TYPE'
        },
        {
          title: 'generateId',
          value: 'GENERATE_ID_TYPE'
        },
        {
          title: 'walletNameRegistration',
          value: 'REGISTER_NAME_TYPE'
        },
        {
          title: 'walletNameDeletion',
          value: 'DELETE_NAME_TYPE'
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
