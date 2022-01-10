const state = () => ({
  name: '',
  editable: false,
  picture: '',
  uid: ''
})

const actions = {
  async signUp({ dispatch }, body) {
    await this.$axios.$post('users/signup', body, {}).then(response => {
      if (response.status) {
        dispatch('putUser', response.result)
      } else {
        this.$toast.error('Incorrect data!')
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async signIn({ dispatch }, body) {
    await this.$axios.$post('users/signin', body, {}).then(response => {
      if (response.status) {
        dispatch('putUser', response.result)
      } else {
        this.$toast.error('Incorrect data!')
      }
    })
    .catch(error => {
      throw new Error(error)
    })
  },
  async logout({ commit, dispatch, state }) {
    await this.$axios.$get('users/logout', { params: {
      uid: state.uid
    }}).then(response => {
      if (response.status) {
        dispatch('destroy')
      }
    })
      .catch(error => {
        throw new Error(error)
      })
  },
  putUser({ commit }, user) {
    commit('SET_USER', user)
    this.$router.push('/')
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  destroy({ commit }) {
    localStorage.clear()
    commit('DESTROY_USER')
    this.$router.push('/')
  }
}

const mutations = {
  SET_USER(state, user) {
    state.name = user.name
    state.picture = user.picture
    state.uid = user.uid
    localStorage.setItem('uid', JSON.stringify(user.uid))
  },
  DESTROY_USER(state) {
    state.name = ''
    state.picture = ''
    state.uid = ''
    state.editable = false
  },
  SET_TOKEN(state, token) {
    state.uid = token
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
