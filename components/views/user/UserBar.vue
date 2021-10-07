<template>
  <div class='user-bar'>
    <div class='user-bar__items'>
      <template v-if='userAuth'>
        Auth user
      </template>
      <template v-else>
        <NuxtLink class='login-link' to='/auth/login'>Login</NuxtLink>
      </template>
      <button class='language'>
        <img src='/icons/language.svg' alt=''>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserBar',
  computed: {
    userAuth() {
      return false
    }
  }
}
</script>
