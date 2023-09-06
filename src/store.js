import Vue from 'vue'
import Vuex from 'vuex'
import product from './store/product.js'
Vue.use(Vuex)

const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    }
  },
  mutations: {
    set(state, payload) {
      state.entries = payload
    }
  },
  actions: {
    load({ commit }, file) {
      axios.get(file).then(response => {
        commit('set', response.data)
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    product
  }
})

export default store