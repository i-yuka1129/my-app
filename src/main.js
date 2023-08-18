// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'
import router from './router'

Vue.config.productionTip = false

console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)
store.commit('update')
console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})