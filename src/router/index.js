import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // IDが付いていないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id', // 「:id」がパラメータ 何が入ってもOK
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
})

export default router