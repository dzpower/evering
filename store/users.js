const state = () => ({
  name: '',
  editable: false,
  picture: '',
  id: null,
  uid: null,
  role: 'guest',
  selfProfile: null
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
  async logout({ dispatch, state }) {
    await this.$axios.$get('users/logout', {
      params: {
        uid: state.uid
      }
    }).then(response => {
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
    commit('DESTROY_USER')
    this.$router.push('/')
  },
  async getSelfProfile({ commit }, token) {
    await this.$axios.get('users/about', { params: { 'uid': token } }).then((res) => {
      commit('SET_PROFILE', res.data.result)
    }).catch((err) => {
      throw err
    })
  },
  async updateProfile({ commit, moment }, [profile, uploadImage]) {
    try {
      const formData = new FormData()
      for (const prop in profile) {
        if (uploadImage) {
          formData.append(prop, profile[prop])
        } else if (prop === 'date_of_birth') {
          const dateObj = new Date(profile[prop])
          const month = dateObj.getUTCMonth() + 1 < 10 ? `0${dateObj.getUTCMonth() + 1}` : dateObj.getUTCMonth() + 1
          const day = dateObj.getUTCDate() < 10 ? `0${dateObj.getUTCDate()}` : dateObj.getUTCDate()
          const year = dateObj.getUTCFullYear()
          const newdate = `${year}-${month}-${day}`

          formData.append(prop, newdate)
        } else if (prop === 'tags') {
          for (let i = 0; i < profile[prop].length; i++) {
            formData.append('tags[]', profile[prop][i])
          }
        } else if (profile[prop] && prop !== 'picture' && prop !== 'date_of_birth' && prop !== 'tags') {
          formData.append(prop, profile[prop])
        }
      }
      const res = await this.$axios.post('/users/about',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      commit('SET_PROFILE', res.data.result)
      return res
    } catch (e) {
      console.log(e)
    }
  }
}

const mutations = {
  SET_USER(state, user) {
    state.name = user.name
    state.picture = user.picture
    state.id = user.id
  },
  DESTROY_USER(state) {
    state.name = ''
    state.picture = ''
    state.editable = false
  },
  SET_TOKEN(state, token) {
    state.uid = token
  },
  SET_PROFILE(state, profileData) {
    state.selfProfile = profileData
  },
  SET_ROLES(state, data) {
    localStorage.setItem('uid', JSON.stringify(data.uid))
    state.uid = data.uid
    state.role = data.role
  }
}

const getters = {
  getUserAuthorized(state) {
    return state.role !== 'guest'
  },
  getToken(state) {
    return state.uid
  },
  getProfile(state) {
    return state.selfProfile
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
