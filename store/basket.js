const state = () => ({
  productsInBasket: [],
  itemsInBasket: []
})

const actions = {
  addToBasket({ commit }, pid) {
    commit('SET_PRODUCT_IN_BASKET', pid)
  },
  async fetchProductsInBasket({ commit, dispatch }, pids) {
    const pidsArray = pids.split(',')
    const pidsObject = {}
    for (const prop in pidsArray) {
      pidsObject[`products[${prop}]`] = pidsArray[prop]
    }
    const response = await this.$axios.get('/get/basket', { params: pidsObject })
    if (response.status) {
      const parseArray = []
      for(const prop in pidsArray) {
        const x = parseInt(pidsArray[prop].replace(/[^\d]/g, ''))
        parseArray.push(x)
      }
      const result = parseArray.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc
      }, {})
      commit('SET_ITEMS_IN_BASKET', [response.data.result, result])
    }
  },
  changeCountInProduct({ commit }, data) {
    commit('CHANGE_COUNT_IN_PRODUCT', { index: data.index, newCount: data.newCount})
  },
  deleteProduct({ commit }, index) {
    commit('DELETE_ITEMS_FROM_BASKET', index)
  }
}

const mutations = {
  SET_PRODUCT_IN_BASKET(state, pid) {
    if (!pid.offers) {
      state.productsInBasket.push('p' + pid.id)
      localStorage.setItem('pids_basket', state.productsInBasket)
    } else {
      state.productsInBasket.push('o' + pid.id)
      localStorage.setItem('pids_basket', state.productsInBasket)
    }
  },
  SET_ITEMS_IN_BASKET(state, [items, array]) {
    const itemsInBusket = []
    for (const prop of items) {
        prop.count = array[prop.id]
        itemsInBusket.push(prop)
    }
    state.itemsInBasket = itemsInBusket
  },
  SET_PID_IN_BUSKET(state) {
    if(process) {
      state.productsInBasket = localStorage.getItem('pids_basket')
    }
  },
  CHANGE_COUNT_IN_PRODUCT(state, data) {
    state.itemsInBasket[data.index].count = data.newCount
  },
  DELETE_ITEMS_FROM_BASKET(state, index) {
    state.itemsInBasket.splice(index, 1)
  }
}

const getters = {
  getCountBasket(state) {
    return state.productsInBasket.length
  },
  getItemsInBasket(state) {
    return state.itemsInBasket
  },
  getProductInBasket() {
    return state.productsInBasket
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
