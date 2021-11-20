const state = () => ({
  menu: [],
  content: [],
  contentUrl: []
})

const actions = {
  async fetchMenu({ commit }) {
    await this.$axios.$get('get/menu').then(response => {
    if (response.status) {
      commit('SET_MENU', response.result)
    }
    })
  },
  async fetchContent({commit}) {
    await this.$axios.get('get').then(response => {
      if (response.status) {
        commit('SET_CONTENT', response.result)
      }
  })
 },
 async fetchContentUrl({commit}, url) {
  await this.$axios.get(`get/${url}`).then(response => {
    if (response.status) {
      commit('SET_CONTENT_URL', response.result)
    }
  })
  },
  async fetchTest({ commit }) {
    const body = {
      description: 'Description',
      title: 'Test product',
    }
    await this.$axios.post(`get/test`, body).then(response => {
      console.log(response)
    })
 }
}

const mutations = {
  SET_MENU(state, payload) {
    state.menu = payload
  },
  SET_CONTENT(state, payload) {
    state.content = payload
  },
  SET_CONTENT_URL(state, payload) {
    state.contentUrl = payload
  }
}

const getters = {
 getMenu(state) {
   return state.menu
 },
 getMenu(state) {
   return state.menu
 },
 getMenu(state) {
  return state.menu
 }
}

export default {
 state,
 mutations,
 getters,
 actions
}