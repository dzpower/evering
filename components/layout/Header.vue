<template>
  <header class='header'>
    <NuxtLink to='/'>Logo</NuxtLink>
    <input type='text' class='search'>
    <nav class='main-nav'>
      <NuxtLink to='#'>Catalog</NuxtLink>
      <NuxtLink to='#'>Community</NuxtLink>
      <NuxtLink to='#'>Marketplace</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
