const state = () => ({
  brands: [],
  brands_universe: [],
  category: [],
  entity_type: [],
  producer: [],
  products: [],
  singleProduct: [],
  singleProductComments: []
})

const actions = {
  async fetchFilters({ commit }) {
    await this.$axios.$get('get/filters').then(response => {
      if (response) {
        commit('SET_CATALOG', response.result)
      }
    }).catch(error => {
      throw new Error(error)
    })
  },
  async getSingleProduct({ commit }, pid) {
    await this.$axios.$get(`get/products/${pid}`).then(response => {
      if (response) {
        commit('SET_SINGLE_PRODUCT', response.result)
      }
    })
  },
  async getSingleProductComments({ commit }, pid) {
    await this.$axios.$get(`get/comments/products/${pid}`).then(response => {
      if (response) {
        console.log(response)
        commit('SET_SINGLE_PRODUCT_COMMENTS', response?.result?.items)
      }
    })
  }
}

const mutations = {
  SET_CATALOG(state, payload) {
    state.brands = payload.brands
    state.brands_universe = payload.brands_universe
    state.category = payload.category
    state.entity_type = payload.entity_type
    state.producer = payload.producer
    state.products = payload.products.items
  },
  SET_SINGLE_PRODUCT(state, payload) {
    state.singleProduct = payload
  },
  SET_SINGLE_PRODUCT_COMMENTS(state, payload) {
    state.singleProductComments = payload
  }
}

const getters = {
  getProducts(state) {
    return state.products
  },
  getSingleProduct(state) {
    return state.singleProduct
  },
  getSingleProductComments(state) {
    return state.singleProductComments
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
