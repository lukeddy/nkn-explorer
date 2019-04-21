export const state = () => ({
  currentPrice: 0
})

export const mutations = {
  setCurrentPrice(state, priceObj) {
    state.currentPrice = priceObj
  }
}

export const getters = {
  getCurrentPrice(state) {
    return state.currentPrice
  }
}

export const actions = {
  async getCurrentPrice({ commit }) {
    const data = await this.$axios.$get(
      'https://price.nknx.org/price?quote=NKN&currency=USD,ETH'
    )
    commit('setCurrentPrice', data[0].prices[0].price)
  }
}
