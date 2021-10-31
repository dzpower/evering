<template>
  <div class='auth'>
    <header-component login-page />
    <div class='auth-place'>
      <Nuxt />
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
    return store.getters['user/getUserAuthorized'] ? redirect('/') : true
  },
}
</script>
