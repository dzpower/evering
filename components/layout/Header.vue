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
      <input type='text' class='search'>
      <nav class='main-nav'>
        <NuxtLink :class='getRouteName.includes("catalog") ? "active" : ""' to='/catalog'>Catalog</NuxtLink>
        <NuxtLink :class='getRouteName.includes("community") ? "active" : ""' to='#'>Community</NuxtLink>
        <NuxtLink :class='getRouteName.includes("marketplace") ? "active" : ""' to='/marketplace'>Marketplace</NuxtLink>
      </nav>
      <user-bar/>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    getRouteName() {
      return this.$route.path
    }
  }
}
</script>
