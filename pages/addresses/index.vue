<template>
  <section class="container">
    <div class="page-header">
      <h1 class="page-header__title text_color_white">{{$t('addresses')}}</h1>
      <div class="page-header__stats page-header__stats_justify_center">
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('total')}}</h6>
          <h4 class="page-header__stats-value text_color_white">{{sumAddresses | commaNumber}}</h4>
        </div>
      </div>
    </div>
    <CardLoader v-if="loading" :count="10"/>

    <CardContainer>
      <AddressCard v-for="address in addresses" :key="address.address" :address="address"/>
    </CardContainer>
    <div v-if="addresses.length > 0" class="page-navigation">
      <div
        class="page-navigation__info"
      >{{$t('showing')}} {{from}} {{$t('to')}} {{to}} {{$t('of')}} {{sumAddresses}}</div>
      <div class="page-navigation__pagination">
        <Pagination :page="prevPage" type="prev" @click.native="getAddresses(prevPage)"/>
        <Pagination :page="nextPage" type="next" @click.native="getAddresses(nextPage)"/>
      </div>
    </div>
  </section>
</template>

<script>
import AddressCard from '~/components/AddressCard/AddressCard'
import CardContainer from '~/components/CardContainer/CardContainer'
import CardLoader from '~/components/Loaders/CardLoader'
import Pagination from '~/components/Pagination/Pagination'

export default {
  components: { AddressCard, CardContainer, CardLoader, Pagination },
  data: () => {
    return {
      loading: true,
      nextPage: null,
      prevPage: null,
      current_page: 1,
      from: 0,
      to: 0,
      sumAddresses: 0,
      addresses: []
    }
  },
  mounted() {
    this.getAddresses(this.current_page)
  },
  methods: {
    getAddresses(page) {
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
      this.$axios.$get(`addresses?page=${page}`).then(function(response) {
        const { sumAddresses, addresses } = response
        const {
          data,
          current_page,
          prev_page_url,
          next_page_url,
          from,
          to
        } = addresses

        self.sumAddresses = sumAddresses
        self.addresses = data

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
