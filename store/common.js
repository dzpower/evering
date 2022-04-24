const state = () => ({
  preloader: false
})

const actions = {
  updatePreloader({ commit }) {
    if(process.client) {
      commit('SHOW_PRELOADER')
      setTimeout(() => {
        commit('HIDDEN_PRELOADER')
      }, 1000)
    }
  }
}


const mutations = {
  SHOW_PRELOADER(state) {
    state.preloader = true
  },
  HIDDEN_PRELOADER(state) {
    state.preloader = false
  }
}

const getters = {
  getLoader(state) {
    return state.preloader
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
