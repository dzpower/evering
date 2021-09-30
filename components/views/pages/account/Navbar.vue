<template>
  <nav class='account-page-navbar'>
    <NuxtLink class="account-page-navbar__navlink" to='/'>My page</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/following'>Following/Followers</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/messages'>Messages</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/communities'>Communities</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/sales'>My sales</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink active" to='/purchases'>My purchases</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/suggestions'>My suggestions</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/drafts'>Drafts</NuxtLink>
    <NuxtLink class="account-page-navbar__navlink" to='/settings'>Settings</NuxtLink>
  </nav>
</template>

<script>

export default {
  name: "Navbar"
}
</script>
