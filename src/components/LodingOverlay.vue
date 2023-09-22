<template>
  <transition name="loading">
    <div class="loading" v-if="loading">Loding</div>
  </transition>
</template>

<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.view.loading
      }
    }
  }
</script>

<style>
  .loading {
    position: fixed;
  }
  .loading-enter-active {
    transition: all 0.25s;
  }
  .loading-leave-active {
    transition: all 0.5s ease 0.5s;
  }
</style>