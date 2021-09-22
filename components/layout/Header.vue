<template>
  <div class='container'>
    <header class='header'>
      <NuxtLink class='logo' to='/'>
        <img src='/icons/logo.svg' alt=''>
      </NuxtLink>
      <input type='text' class='search'>
      <nav class='main-nav'>
        <NuxtLink class='active' to='#'>Catalog</NuxtLink>
        <NuxtLink to='#'>Community</NuxtLink>
        <NuxtLink to='#'>Marketplace</NuxtLink>
      </nav>
      <user-bar/>
    </header>
  </div>
</template>

<script>
import UserBar from '@/components/views/user/UserBar'
export default {
  components: {
    'user-bar': UserBar
  },
  name: 'Header'
}
</script>
