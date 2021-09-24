<template>
  <div :class='getRouteName === "catalog" ? "container header-container header-green" : "container header-container"'>
    <header class='header'>
      <NuxtLink class='logo' to='/'>
        <img src='/icons/logo.svg' alt=''>
      </NuxtLink>
      <input type='text' class='search'>
      <nav class='main-nav'>
        <NuxtLink :class='getRouteName === "catalog" ? "active" : ""' to='/catalog'>Catalog</NuxtLink>
        <NuxtLink :class='getRouteName === "community" ? "active" : ""' to='#'>Community</NuxtLink>
        <NuxtLink :class='getRouteName === "marketplace" ? "active" : ""' to='#'>Marketplace</NuxtLink>
      </nav>
      <user-bar/>
    </header>
  </div>
</template>

<script>
import UserBar from '@/components/views/user/UserBar'
export default {
  name: 'Header',
  components: {
    'user-bar': UserBar
  },
  computed: {
    getRouteName() {
      return this.$route.name
    }
  }
}
</script>
