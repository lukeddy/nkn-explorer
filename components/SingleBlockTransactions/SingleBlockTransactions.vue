<template>
  <div>
    <CardLoader v-if="!transactions.length" :count="5"/>
    <CardContainer v-if="transactions.length">
      <SingleBlockTxCard v-for="tx in transactions" :key="tx.id" :tx="tx"/>
    </CardContainer>
  </div>
</template>

<style lang="scss">
@import './SingleBlockTransactions.scss';
</style>

<script>
import CardContainer from '~/components/CardContainer/CardContainer'
import SingleBlockTxCard from '~/components/SingleBlockTxCard/SingleBlockTxCard'
import CardLoader from '~/components/Loaders/CardLoader'

export default {
  components: { CardContainer, SingleBlockTxCard, CardLoader },
  props: {
    blockId: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      transactions: []
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
        })
    }
  }
}
</script>
