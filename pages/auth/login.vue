<template>
  <div class='login'>
    <h2>Log in to Everigin</h2>
    <input
      type='email'
      placeholder='Email *'
      required
      class='input-default'/>
    <input
      type='password'
      placeholder='Password *'
      required
      class='input-default'/>
    <NuxtLink class='auth-link' to='#'>Forgot your password?</NuxtLink>
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
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
