<template>
  <section v-if="block.header" class="container">
    <div class="single-page-header">
      <GetBack :text="$t('allBlocks')" route="/blocks"/>
      <div class="single-page-header__info">
        <h6 class="text_color_grey-light text_transform_uppercase">{{$t('block')}}</h6>
        <h1 class="single-page-header__title">{{block.header.height | commaNumber}}</h1>
        <div class="text_opacity_75">
          {{$t('created')}}
          {{ $moment(block.header.timestamp).fromNow() }}
        </div>
      </div>
      <div class="single-page-header__switches">
        <CardSwitch
          :active="activeGeneral"
          @click.native="toggleSwitch('activeGeneral')"
        >{{$t('generalInfo')}}</CardSwitch>
        <CardSwitch
          :active="activeTx"
          @click.native="toggleSwitch('activeTx')"
        >{{$t('transactions')}}</CardSwitch>
      </div>
    </div>
    <SingleBlockInfo v-if="activeGeneral" :block="block"/>
    <SingleBlockTransactions v-if="activeTx" :transactions="block.transactions"/>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleBlockInfo from '~/components/SingleBlockInfo/SingleBlockInfo'
import SingleBlockTransactions from '~/components/SingleBlockTransactions/SingleBlockTransactions'
import CardSwitch from '~/components/CardSwitch/CardSwitch'

export default {
  components: { GetBack, SingleBlockInfo, CardSwitch, SingleBlockTransactions },
  data: () => {
    return {
      block: {},
      activeGeneral: true,
      activeTx: false
    }
  },
  mounted: function() {
    this.getPrice()
    this.getBlock()
  },
  methods: {
    toggleSwitch(name) {
      switch (name) {
        case 'activeGeneral':
          this.activeGeneral = true
          this.activeTx = false
          break
        case 'activeTx':
          this.activeTx = true
          this.activeGeneral = false
          break
        default:
      }
    },
    getBlock: function() {
      const self = this
      const blockHash = this.$route.params.id

      this.$axios.$get(`blocks/${blockHash}`).then(function(response) {
        self.block = response
      })
    },
    getPrice: function() {
      this.$store.dispatch('price/getCurrentPrice')
    }
  }
}
</script>
