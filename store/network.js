export const state = () => ({
  networkStats: false,
  networkCities: false,
  networkCountries: false
})

export const mutations = {
  setNetworkStats(state, networkStatsObj) {
    state.networkStats = networkStatsObj
  },
  setNetworkCities(state, citiesObj) {
    state.networkCities = citiesObj
  },
  setNetworkCountries(state, countriesObj) {
    state.networkCountries = countriesObj
  }
}

export const getters = {
  getNetworkStats(state) {
    return state.networkStats
  },
  getNetworkCities(state) {
    return state.networkCities
  },
  getNetworkCountries(state) {
    return state.networkCountries
  }
}

export const actions = {
  async getNetworkStats({ commit }) {
    const data = await this.$axios.$get('https://api2.nknx.org/network/stats')
    commit('setNetworkStats', data)
  },
  async getNetworkCities({ commit }) {
    const data = await this.$axios.$get('https://api2.nknx.org/network/cities')
    commit('setNetworkCities', data)
  },
  async getNetworkCountries({ commit }) {
    const data = await this.$axios.$get(
      'https://api2.nknx.org/network/countries'
    )
    commit('setNetworkCountries', data)
  }
}
