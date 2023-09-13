<template>
  <div class="product">
    <h1>{{ detail.name }}</h1>
    <nav class="nav">
      <router-link :to="{ name: 'product-home' }">商品詳細</router-link>
      <router-link :to="{ name: 'product-review' }">レビュー</router-link>
    </nav>
    <!-- ここに子ルートを埋め込む -->
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    props: {
      id: Number
    },
    computed: mapGetters('product', ['detail']),
    watch: {
      id: {
        handler() {
          this.$store.dispatch('product/load', this.id)
        },
        immediate: true
      }
    },
    beforeDestroy() {
      // 親ルートを移動するとき商品詳細データを破棄
      this.$store.dispatch('product/destroy')
    }
  }
</script>

<style>
.view-enter-active, .view-leave-active {
  transition: opacuty 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>