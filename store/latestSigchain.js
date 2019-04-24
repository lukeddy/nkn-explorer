export const state = () => ({
  latestSigchain: false
})

export const mutations = {
  setLatestSigchain(state, sigchainObj) {
    state.latestSigchain = sigchainObj
  }
}

export const getters = {
  getLatestSigchain(state) {
    return state.latestSigchain
  }
}

export const actions = {
  async getLatestSigchain({ commit }) {
    const data = await this.$axios.$get('sigchains/latest')
    commit('setLatestSigchain', data)
  }
}
