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
        v-if='!loginPage && getTopMenu'
        class='main-nav'
      >
        <NuxtLink
          v-for="(itemTopMenu, index) in getTopMenu"
          :key="index"
          :class='getRouteName.includes(itemTopMenu.name) ? "active" : ""'
          :to='itemTopMenu.url_full.slice(0, -1)'
        >
          {{ itemTopMenu.name }}
        </NuxtLink>
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
    },
    getTopMenu() {
      return this.$store.getters['content/getMenu']?.top ? this.$store.getters['content/getMenu']?.top[1] : []
    }
  }
}
</script>
