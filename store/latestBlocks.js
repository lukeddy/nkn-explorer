export const state = () => ({
  latestBlocks: false
})

export const mutations = {
  setLatestBlocks(state, blocksObj) {
    state.latestBlocks = blocksObj
  }
}

export const getters = {
  getLatestBlocks(state) {
    return state.latestBlocks
  }
}

export const actions = {
  async updateLatestBlocks({ commit }) {
    const data = await this.$axios.$get('blocks')
    commit('setLatestBlocks', data.blocks.data.slice(0, 5))
  }
}
