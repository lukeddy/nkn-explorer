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
  async updateNetworkStats({ commit }) {
    const data = await this.$axios.$get('https://api.nknx.nkn.org/network/stats')
    commit('setNetworkStats', data)
  },
  async updateNetworkCities({ commit }) {
    const data = await this.$axios.$get('https://api.nknx.nkn.org/network/cities')
    commit('setNetworkCities', data)
  },
  async updateNetworkCountries({ commit }) {
    const data = await this.$axios.$get(
      'https://api.nknx.nkn.org/network/countries'
    )
    commit('setNetworkCountries', data)
  }
}
