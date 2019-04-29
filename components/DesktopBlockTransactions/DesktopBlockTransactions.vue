<template>
  <div class="desktop-block-transactions">
    <h2 class="desktop-heading">{{$t('transactions')}}</h2>
    <TableLoader v-if="loading" :count="5"/>
    <table v-else class="table">
      <thead class="table__head">
        <tr class="table__head-row">
          <th class="table__title text_align_left">{{$t('type')}}</th>
          <th class="table__title text_align_left">{{$t('created')}}</th>
          <th class="table__title text_align_left">{{$t('hash')}}</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <DesktopTx v-for="tx in transactions" :key="tx.id" :tx="tx"/>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@import './DesktopBlockTransactions.scss';
</style>

<script>
import DesktopTx from '~/components/DesktopTx/DesktopTx'
import TableLoader from '~/components/Loaders/TableLoader'

export default {
  components: { TableLoader, DesktopTx },
  props: {
    blockId: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      transactions: [],
      loading: true
    }
  },
  mounted: function() {
    this.getBlockTransactions()
  },
  methods: {
    getBlockTransactions() {
      const self = this

      this.$axios
        .$get(`blocks/${this.blockId}/transactions`)
        .then(function(response) {
          self.transactions = response
          self.loading = false
        })
    }
  }
}
</script>
