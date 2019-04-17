<template>
  <section class="container">
    <div class="single-page-header">
      <GetBack :text="$t('allBlocks')" route="/blocks"/>
      <div class="single-page-header__info">
        <h6 class="text_color_grey-light text_transform_uppercase">{{$t('block')}}</h6>
        <h1 class="single-page-header__title">{{$route.params.id | commaNumber}}</h1>
        <div class="text_opacity_75">
          {{$t('created')}}
          {{ $moment(block.timestamp).fromNow() }}
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
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleBlockInfo from '~/components/SingleBlockInfo/SingleBlockInfo'
import CardSwitch from '~/components/CardSwitch/CardSwitch'

export default {
  components: { GetBack, SingleBlockInfo, CardSwitch },
  data: () => {
    return {
      block: {
        height: 777694,
        timestamp: '2019-04-16 12:30:04',
        miner: 'NL7QxfhKbahCCDyRZbPyYzEUtSmwAXPkkF',
        size: 2266,
        hash:
          '3b1d2d82c6af6a583ca9159814826f400eb50607710778819094a3f90b51573e',
        transactionRoot:
          'd7b6e739917892e64162e8cc639ce2764604f06d7622cedb5a3409adfb8d4523',
        transactionCount: 2
      },
      activeGeneral: true,
      activeTx: false
    }
  },
  mounted: function() {},
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
    }
  }
}
</script>
