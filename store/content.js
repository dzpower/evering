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
  categories: [],
  blogComments: null,
  feedPost: null,
  singleReviewsComments: null,
  singleReviews: null,
  communities: null,
  singleCommunities: null,
})

const actions = {
  async fetchMenu({ commit }) {
    await this.$axios.$get('get/menu').then(response => {
      if (response) {
        commit('SET_MENU', response.result)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchContent({ commit }) {
    await this.$axios.get('get').then(response => {
      if (response) {
        commit('SET_CONTENT', response.data.result.modules)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchBlogs({ commit }) {
    await this.$axios.get('get/blogs').then(response => {
      if (response.status) {
        commit('SET_BLOGS', response.data.result.items)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchBlogsComments({ commit }, bid) {
    await this.$axios.get(`get/comments/blogs/${bid}`).then(response => {
      if (response?.status) {
        commit('SET_BLOGS_COMMENTS', response?.data?.result?.items)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchSingleBlog({ commit }, bid = '') {
    await this.$axios.get(`get/blogs/${bid}`).then(response => {
      if (response.status) {
        commit('SET_SINGLE_BLOG', response.data.result)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchCategories({ commit }) {
    await this.$axios.get(`get/category`).then(response => {
      if (response.status) {
        commit('SET_CATEGORIES', response.data.result.items)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchSingleReviews({ commit }, rid) {
    await this.$axios.get(`get/reviews/${rid}`).then(response => {
      if (response.status) {
        commit('SET_SINGLE_REVIEW', response?.data?.result)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchSingleReviewsComments({ commit }, rid) {
    await this.$axios.get(`get/comments/reviews/${rid}`).then(response => {
      if (response.status) {
        commit('SET_SINGLE_REVIEWS_COMMENTS', response?.data?.result?.items)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchCommunities({ commit }) {
    await this.$axios.get('get/community').then(response => {
      if (response.status) {
        commit('SET_COMMUNITIES', response.data.result.items)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async fetchSingleCommunities({ commit }, cid) {
    await this.$axios.get(`get/community/${cid}`).then(response => {
      if (response.status) {
        commit('SET_SINGLE_COMMUNITIES', response?.data?.result)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
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
  SET_BLOGS_COMMENTS(state, payload) {
    state.blogComments = payload
  },
  SET_SINGLE_REVIEWS_COMMENTS(state, payload) {
    state.singleReviewsComments = payload
  },
  SET_SINGLE_REVIEW(state, payload) {
    state.singleReviews = payload
  },
  SET_SINGLE_BLOG(state, payload) {
    state.singleBlog = payload
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_COMMUNITIES(state, payload) {
    state.communities = payload
  },
  SET_SINGLE_COMMUNITIES(state, payload) {
    state.singleCommunities = payload
  },

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
  },
  getBlogComments(state) {
    return state.blogComments
  },
  getSingleReviewsComments(state) {
    return state.singleReviewsComments
  },
  getCommunities(state) {
    return state.communities
  },
  getSingleCommunities(state) {
    return state.singleCommunities
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
