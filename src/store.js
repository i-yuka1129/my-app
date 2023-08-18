import Vue from 'vue'
import Vuex from 'vuex'
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
    moduleA: myModule,
    moduleB: myModule
  }
})

if (module.hot) {
  module.hot.accept(['./store/myModule.js']).default
  store.hotUpdate({
    modules: {
      myModule: myModule
    }
  })
}

export default store
store.dispatch('moduleA/load', './a.json')
store.dispatch('moduleB/load', './b.json')