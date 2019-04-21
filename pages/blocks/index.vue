<template>
  <section class="container">
    <div class="page-header">
      <h1 class="page-header__title text_color_white">{{$t('blocks')}}</h1>
      <div class="page-header__stats">
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('total')}}</h6>
          <h4 class="page-header__stats-value text_color_white">{{sumBlocks | commaNumber}}</h4>
        </div>
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('avgSize')}}</h6>
          <h4 class="page-header__stats-value text_color_white">
            {{avgSize}}
            <span
              class="page-header__stats-index text_color_white text_size_sm text_opacity_75"
            >{{$t('bytes')}}</span>
          </h4>
        </div>
      </div>
    </div>
    <CardLoader v-if="loading" :count="10"/>
    <CardContainer v-else>
      <BlockCard v-for="block in blocks" :key="block.height" :block="block"/>
    </CardContainer>
    <div v-if="blocks.length>0" class="page-navigation">
      <div
        class="page-navigation__info"
      >{{$t('showing')}} {{from}} {{$t('to')}} {{to}} {{$t('of')}} {{sumBlocks}}</div>
      <div class="page-navigation__pagination">
        <Pagination :page="prevPage" type="prev" @click.native="getBlocks(prevPage)"/>
        <Pagination :page="nextPage" type="next" @click.native="getBlocks(nextPage)"/>
      </div>
    </div>
  </section>
</template>

<script>
import BlockCard from '~/components/BlockCard/BlockCard'
import CardContainer from '~/components/CardContainer/CardContainer'
import CardLoader from '~/components/Loaders/CardLoader'
import Pagination from '~/components/Pagination/Pagination'

export default {
  components: { BlockCard, CardContainer, Pagination, CardLoader },
  data: () => {
    return {
      loading: true,
      nextPage: null,
      prevPage: null,
      current_page: 1,
      from: 0,
      to: 0,
      sumBlocks: 0,
      avgSize: 0,
      blocks: []
    }
  },
  mounted() {
    this.getBlocks(this.current_page)
  },
  methods: {
    getBlocks(page) {
      const self = this

      // Checking if page exists
      if (page === null) {
        return false
      }

      self.loading = true

      // Disabling pagination untill data fetched
      self.nextPage = null
      self.prevPage = null

      // Fetcing data
      this.$axios.$get(`blocks?page=${page}`).then(function(response) {
        const { avgSize, sumBlocks, blocks } = response
        const {
          data,
          current_page,
          prev_page_url,
          next_page_url,
          from,
          to
        } = blocks

        self.avgSize = avgSize
        self.sumBlocks = sumBlocks
        self.blocks = data

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
