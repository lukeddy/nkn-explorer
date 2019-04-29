export const state = () => ({
  latestTransactions: false
})

export const mutations = {
  setLatestTransactions(state, txObj) {
    state.latestTransactions = txObj
  }
}

export const getters = {
  getLatestTransactions(state) {
    return state.latestTransactions
  }
}

export const actions = {
  async updateLatestTransactions({ commit }) {
    const data = await this.$axios.$get('transactions')
    commit('setLatestTransactions', data.transactions.data.slice(0, 5))
  }
}
