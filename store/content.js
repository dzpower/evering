const state = () => ({
  menu: [],
  modules: {
    blogs: [],
    offers: [],
    brands: [],
    category: [],
    community: [],
    reviews: []
  },
  blogs: [],
  singleBlog: {},
  categories: []
})

const actions = {
  async fetchMenu({ commit }) {
    await this.$axios.$get('get/menu').then(response => {
      if (response.status) {
        commit('SET_MENU', response.result)
      }
    })
  },
  async fetchContent({ commit }) {
    await this.$axios.get('get').then(response => {
      if (response.status) {
        commit('SET_CONTENT', response.data.result.modules)
      }
    })
  },
  async fetchBlogs({ commit }) {
    await this.$axios.get('get/blogs').then(response => {
      if (response.status) {
        commit('SET_BLOGS', response.data.result.items)
      }
    })
      .catch(error => {
        this.$toast.error(error)
      })
  },
  async fetchSingleBlog({ commit }, bid = '') {
    await this.$axios.get(`get/blogs/${bid}`).then(response => {
      if (response.status) {
        commit('SET_SINGLE_BLOG', response.data.result)
      }
    })
  },
  async fetchCategories({ commit }) {
    await this.$axios.get(`get/category`).then(response => {
      if (response.status) {
        commit('SET_CATEGORIES', response.data.result.items)
      }
    })
  }
}

const mutations = {
  SET_MENU(state, payload) {
    state.menu = payload
  },
  SET_CONTENT(state, payload) {
    state.modules = payload
  },
  SET_BLOGS(state, payload) {
    state.blogs = payload
  },
  SET_SINGLE_BLOG(state, payload) {
    state.singleBlog = payload
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  }
}

const getters = {
  getMenu(state) {
    return state.menu
  },
  getСontent(state) {
    return state.modules
  },
  getBlogs(state) {
    return state.blogs
  },
  getSingleBlog(state) {
    return state.singleBlog
  },
  getCategories(state) {
    return state.categories
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
