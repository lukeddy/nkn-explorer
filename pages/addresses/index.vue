<template>
  <section class="container">
    <div class="page-header">
      <h1 class="page-header__title text_color_white">{{$t('addresses')}}</h1>
      <div class="page-header__stats page-header__stats_justify_center">
        <div class="page-header__stats-item">
          <h6
            class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
          >{{$t('total')}}</h6>
          <h4 class="page-header__stats-value text_color_white">{{totalAddresses | commaNumber}}</h4>
        </div>
      </div>
    </div>
    <CardContainer>
      <AddressCard v-for="address in addressesSample" :key="address.address" :address="address"/>
    </CardContainer>
  </section>
</template>

<script>
import AddressCard from '~/components/AddressCard/AddressCard'
import CardContainer from '~/components/CardContainer/CardContainer'

export default {
  components: { AddressCard, CardContainer },
  data: () => {
    return {
      next_page: null,
      prev_page: null,
      current_page: 1,
      latestAddresses: [],
      totalAddresses: 777693,
      addressesSample: [
        {
          address: 'NUPUc58Fk1dJxSgfdPvUtLp4kwyJTDpKFv',
          last_transaction: '2019-04-18 17:46:31',
          transactions: 152,
          first_transaction: '2019-02-27 05:39:08'
        },
        {
          address: 'NUGBBeYCyJ8D7JBLDFkA4DWMswgPkvGqx5',
          last_transaction: '2019-04-18 17:46:11',
          transactions: 29,
          first_transaction: '2019-03-12 08:24:46'
        },
        {
          address: 'NQhpG7Bh8VZddrCPnKyc4hVdTFtdcFnYy9',
          last_transaction: '2019-04-18 17:45:50',
          transactions: 1631,
          first_transaction: '2018-09-23 10:44:54'
        }
      ]
    }
  },
  mounted() {
    this.getLatestAddresses()
  },
  methods: {
    getLatestAddresses() {
      const self = this
      this.$axios.$get('addresses').then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestAddresses = response.data
      })
    },
    getNextAddressPage() {
      const self = this
      this.$axios.$get(this.next_page).then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestAddresses = response.data
      })
    },
    getPrevAddressPage() {
      const self = this
      this.$axios.$get(this.prev_page).then(function(response) {
        self.next_page = response.next_page_url
        self.prev_page = response.prev_page_url
        self.current_page = response.current_page
        self.latestAddresses = response.data
      })
    }
  }
}
</script>
