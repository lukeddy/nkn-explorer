<template>
  <section class="section">
    <div class="single-page-header">
      <div class="single-page-header__wrapper">
        <GetBack :text="$t('allBlocks')" route="blocks"/>
        <Block class="single-page-header__icon single-page-header__icon_block"/>
        <div class="single-page-header__info">
          <h6
            class="single-page-header__subtitle text_color_grey-light text_transform_uppercase"
          >{{$t('block')}}</h6>
          <h1 class="single-page-header__title">
            <span v-if="!loading">{{block.header.height | commaNumber}}</span>
            <span v-else>{{$t('loading')}}</span>
          </h1>
          <span class="text_opacity_75">
            <span v-if="!loading">
              {{$t('created')}}
              {{ $moment(block.header.timestamp + "Z").fromNow() }}
            </span>
            <span v-else>{{$t('loading')}}</span>
          </span>
          <div v-if="!loading" class="single-page-header__hash">{{block.header.hash}}</div>
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
    </div>

    <mq-layout :mq="['sm','md']">
      <template v-if="!loading">
        <SingleBlockInfo v-if="activeGeneral" :block="block"/>
        <SingleBlockTransactions
          v-if="activeTx"
          :txCount="block.transactions_count"
          :blockId="block.id"
        />
      </template>
      <CardLoader v-else :count="5"/>
    </mq-layout>

    <mq-layout mq="lg">
      <DesktopWrapper>
        <TableLoader v-if="loading" :count="5"/>
        <DesktopBlockInfo v-if="!loading" :block="block"/>
        <DesktopBlockTransactions
          v-if="!loading"
          :txCount="block.transactions_count"
          :blockId="block.id"
        />
      </DesktopWrapper>
    </mq-layout>
  </section>
</template>

<script>
import GetBack from '~/components/GetBack/GetBack'
import SingleBlockInfo from '~/components/SingleBlockInfo/SingleBlockInfo'
import SingleBlockTransactions from '~/components/SingleBlockTransactions/SingleBlockTransactions'
import CardSwitch from '~/components/CardSwitch/CardSwitch'
import CardLoader from '~/components/Loaders/CardLoader'
import TableLoader from '~/components/Loaders/TableLoader'

import DesktopWrapper from '~/components/DesktopWrapper/DesktopWrapper'
import DesktopBlockInfo from '~/components/DesktopBlockInfo/DesktopBlockInfo'
import DesktopBlockTransactions from '~/components/DesktopBlockTransactions/DesktopBlockTransactions'

import Block from '@/assets/icons/Block.svg'

export default {
  transition: 'expand',
  components: {
    GetBack,
    SingleBlockInfo,
    CardSwitch,
    SingleBlockTransactions,
    CardLoader,
    Block,
    DesktopWrapper,
    TableLoader,
    DesktopBlockInfo,
    DesktopBlockTransactions
  },
  data: () => {
    return {
      loading: true,
      block: {},
      activeGeneral: true,
      activeTx: false
    }
  },
  mounted: function() {
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
        self.loading = false
      })
    }
  }
}
</script>
