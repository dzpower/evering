<template>
  <div class='auth'>
    <header-component login-page />
    <div class='auth-place'>
      <main class="main">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: "auth",
  components: {
    'header-component': Header
  },
  middleware ({ store, redirect }) {
    return store.getters['users/getUserAuthorized'] ? store.dispatch('users/destroy') : true
  },
}
</script>
