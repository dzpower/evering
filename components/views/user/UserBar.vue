<template>
  <div class='user-bar'>
    <div class='user-bar__items'>
      <template v-if='getUserAuthorized'>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/like.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/notifications.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/mag.svg' alt=''></NuxtLink>
          <NuxtLink class='user-bar__badge' to='#'><img src='/icons/not-user.svg' alt=''></NuxtLink>
          <NuxtLink
            to='/basket'
            :class='getCountBasket ? "user-bar__badge user-bar__badge--active" : "user-bar__badge"'
          >
            <img src='/icons/basket.svg' alt=''>
          </NuxtLink>
          <div
            class='user-bar__badge'
            @click='$store.dispatch("users/logout")'
          >
            <img src='/icons/logout.svg' alt=''>
          </div>
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
    getUserAuthorized() {
      return this.$store.getters['users/getUserAuthorized']
    },
    getCountBasket(state) {
      return this.$store.getters['basket/getCountBasket']
    }
  }
}
</script>
