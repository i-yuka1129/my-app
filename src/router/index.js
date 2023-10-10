import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList' // 商品一覧
import Product from '@/views/Product' // 商品情報（親ルート）
// Productの子ルートたち
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'
// import store from '../store'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const About = () => import('@/views/About')
const router = new VueRouter({
  routes: [
    {
      path: '/user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      component: Home
    },
    // 商品一覧ページ
    {
      path: '/product',
      component: ProductList,
    },
    // 商品情報ページ
    {
      path: '/product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      }),
      children: [
        // 商品詳細（デフォルトルート）
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        // 商品のレビュー一覧
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        // 商品のレビュー詳細
        {
          name: 'review-detail',
          path: 'review/:rid', // 親ルートとかぶらないパラメータを指定
          component: ProductReviewDetail,
          props: route => ({
            rid: Number(route.params.rid)
          })
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  // 上位ルートを含めて認証が必要なルートがあるかを確認
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 認証状態を確認
    if (!auth.loggedIn()) {
      // 認証していなければログインページにリダイレクト
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 認証の確認が必要ないルートならnext()で遷移
  }
})

export default router