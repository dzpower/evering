const state = () => ({
  uid: '',
  name: '',
  email: '',
  picture: ''
})

const actions = {
  putUser({commit}, user) {
    commit('SET_USER', user)
    this.$router.push('/')
  }
}

const mutations = {
  SET_USER(state, user) {
    state.name = user.name
    state.email = user.email
    state.picture = user.picture
    state.uid = JSON.parse(JSON.stringify(user.uid))
    localStorage.setItem('uid', JSON.stringify(state.uid))
  }
}

const getters = {
  getUserAuthorized(state) {
    return !!state.uid
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
