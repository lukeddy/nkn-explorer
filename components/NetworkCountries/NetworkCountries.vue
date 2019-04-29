<template>
  <div class="network-countries">
    <table class="network-countries__table">
      <thead class="network-countries__header">
        <tr class="network-countries__row">
          <th class="network-countries__title">{{$t('rank')}}</th>
          <th class="network-countries__title">{{$t('country')}}</th>
          <th class="network-countries__title"></th>
          <th class="network-countries__title">{{$t('nodes')}}</th>
        </tr>
      </thead>
      <tbody class="network-countires__data">
        <tr
          v-for="(country, i) in filterCountries"
          :key="country.country_code"
          class="network-countries__row network-countries__row_type_data"
        >
          <td class="network-countries__item">{{i + 1}}</td>
          <td class="network-countries__item network-countries__item_country text_wrap_none">
            <CountryFlag
              class="network-countries__flag"
              :country="country.country_code"
              size="normal"
            />
            <span class="network-countries__country">{{country.country_name}}</span>
          </td>
          <td class="network-countries__item network-countries__item_percentage">
            <span class="network-countries__percentage" :style="{width: country.percent+'%'}"></span>
          </td>
          <td
            class="network-countries__item"
          >{{country.count}} {{'('+(Number(country.percent)).toFixed(2)+'%)'}}</td>
        </tr>
      </tbody>
    </table>
    <div class="network-countries__toggle">
      <Button
        class="network-countries__button"
        type="button"
        theme="ghost"
        @click.native="toggleCountries"
      >
        <span v-if="!fullCountries">{{$t('showMore')}}</span>
        <span v-else>{{$t('showLess')}}</span>
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
@import './NetworkCountries';
</style>

<script>
import Button from '~/components/Button/Button'

import CountryFlag from 'vue-country-flag'
import * as CountryNames from 'i18n-iso-countries'

import { mapGetters } from 'vuex'

export default {
  components: { CountryFlag, Button },
  data: () => {
    return { fullCountries: false, countries: [] }
  },
  computed: {
    ...mapGetters({
      networkCountries: 'network/getNetworkCountries'
    }),
    filterCountries: function() {
      if (this.fullCountries) {
        return this.countries
      } else {
        return this.countries.slice(0, 10)
      }
    }
  },
  mounted: function() {
    CountryNames.registerLocale(
      require('i18n-iso-countries/langs/' + this.$i18n.locale + '.json')
    )

    this.countries = this.networkCountries

    this.countries.forEach(country => {
      country.country_name = CountryNames.getName(
        country.country_code,
        this.$i18n.locale
      )
    })
  },
  methods: {
    toggleCountries: function() {
      this.fullCountries = !this.fullCountries
    }
  }
}
</script>
