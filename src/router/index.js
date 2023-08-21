import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
