<template>
  <div
    :class='
      getRouteName.includes("catalog")
      ? "container header-container header-green"
      : getRouteName.includes("marketplace")
      ? "container header-container header-purple"
      : "container header-container"
  '>
    <header class='header'>
      <NuxtLink class='logo' to='/'>
        <img src='/icons/logo.svg' alt=''>
      </NuxtLink>
      <input
        v-if='!loginPage'
        type='text'
        class='search'
      >
      <nav
        v-if='!loginPage'
        class='main-nav'
      >
        <NuxtLink :class='getRouteName.includes("catalog") ? "active" : ""' to='/catalog'>Catalog</NuxtLink>
        <NuxtLink :class='getRouteName.includes("community") ? "active" : ""' to='#'>Community</NuxtLink>
        <NuxtLink :class='getRouteName.includes("marketplace") ? "active" : ""' to='/marketplace'>Marketplace</NuxtLink>
      </nav>
      <user-bar v-if='!loginPage'/>
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
  props: {
    loginPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getRouteName() {
      return this.$route.path
    }
  }
}
</script>
