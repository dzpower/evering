const state = () => ({
 news: []
})

const actions = {
 async fetchNews({ commit }) {
  await this.$axios.$get('get/news').then(response => {
   if(response.status) {
    commit('SET_NEWS', response.result)
   }
  })
 }
}


const mutations = {
 SET_NEWS(state, payload) {
  state.new = payload
 }
}

const getters = {
 getNews(state) {
  return state.news
 }
}

export default {
state,
mutations,
getters,
actions
}
