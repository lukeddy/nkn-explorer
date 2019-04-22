<template>
  <div>
    <CardLoader v-if="loading" :count="5"/>
    <CardContainer else>
      <SingleBlockTxCard v-for="tx in paginatedData" :key="tx.id" :tx="tx"/>
    </CardContainer>
    <div v-if="transactions.length > 0" class="page-navigation">
      <div
        class="page-navigation__info"
      >{{$t('showing')}} {{from}} {{$t('to')}} {{to}} {{$t('of')}} {{transactions.length}}</div>
      <div class="page-navigation__pagination">
        <Pagination :page="prevPage" type="prev" @click.native="getPrevPage()"/>
        <Pagination :page="nextPage" type="next" @click.native="getNextPage()"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardContainer from '~/components/CardContainer/CardContainer'
import SingleBlockTxCard from '~/components/SingleBlockTxCard/SingleBlockTxCard'
import CardLoader from '~/components/Loaders/CardLoader'
import Pagination from '~/components/Pagination/Pagination'

export default {
  components: { CardContainer, SingleBlockTxCard, CardLoader, Pagination },
  props: {
    address: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      transactions: [],
      loading: true,
      itemsOnPage: 10,
      nextPage: 1,
      prevPage: 1,
      currentItems: 10,
      pageNumber: 0
    }
  },
  computed: {
    pageCount() {
      const dataLength = this.transactions.length
      return dataLength / this.itemsOnPage
    },
    from() {
      return this.pageNumber * this.itemsOnPage + 1
    },
    to() {
      return this.pageNumber * this.itemsOnPage + this.paginatedData.length
    },
    paginatedData() {
      const start = this.pageNumber * this.itemsOnPage
      const end = start + this.itemsOnPage
      return this.transactions.slice(start, end)
    }
  },
  updated: function() {
    if (this.pageNumber >= this.pageCount - 1) {
      this.nextPage = null
    } else {
      this.nextPage = this.pageNumber
    }
    if (this.pageNumber === 0) {
      this.prevPage = null
    } else {
      this.prevPage = this.pageNumber
    }
  },
  mounted: function() {
    this.getAddressTransactions()
  },
  methods: {
    getAddressTransactions() {
      const self = this
      this.$axios
        .$get(`addresses/${this.address}/transactions`)
        .then(function(response) {
          self.transactions = response.reverse()
          self.loading = false
        })
    },
    getNextPage() {
      this.pageNumber++
      this.currentItems = this.paginatedData.length
    },
    getPrevPage() {
      this.pageNumber--
      this.currentItems = this.paginatedData.length
    }
  }
}
</script>
