export const state = () => ({
  currentPrice: false,
  marketStats: false
})

export const mutations = {
  setCurrentPrice(state, priceObj) {
    state.currentPrice = priceObj.prices[0].price
    state.marketStats = priceObj
  }
}

export const getters = {
  getCurrentPrice(state) {
    return state.currentPrice
  },
  getMarketStats(state) {
    return state.marketStats
  }
}

export const actions = {
  async getCurrentPrice({ commit }) {
    const data = await this.$axios.$get(
      'https://price.nknx.org/price?quote=NKN&currency=USD,ETH'
    )
    commit('setCurrentPrice', data[0])
  }
}
