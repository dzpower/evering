<template>
  <form class='login' @submit.prevent="signIn">
    <h2>Log in to Everigin</h2>
    <input
      v-model='user.email'
      type='email'
      placeholder='Email *'
      required
      class='input-default'/>
    <input
      v-model='user.password'
      type='password'
      placeholder='Password *'
      required
      class='input-default'/>
    <NuxtLink class='auth-link' to='/auth/forgot'>Forgot your password?</NuxtLink>
    <eve-button square>Enter</eve-button>
    <div class='auth-alternative'>
      <div class='auth-alternative__social'>
        <span>Log in using</span>
        <img src='/icons/vk.svg' alt=''>
        <img src='/icons/facebook.svg' alt=''>
      </div>
      <div class='auth-alternative__have-account'>
        <span>For the first time on Everigin?</span>
        <NuxtLink to='/auth/registration' class='eve-button eve-button--square'>Create an account</NuxtLink>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch('users/signIn', this.user)
    },
  },
}
</script>
