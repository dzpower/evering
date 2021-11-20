<template>
  <div class='user-bar'>
    <div class='user-bar__items'>
      <template v-if='getUserAuthorized'>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/like.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/notifications.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/mag.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/not-user.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/basket.svg' alt=''></NuxtLink>
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
import { mapGetters } from 'vuex'

export default {
  name: 'UserBar',
  computed: {
    ...mapGetters('users', [
      'getUserAuthorized'
    ])
  }
}
</script>
