<template>
  <div class='registration'>
    <h2>Create an account on Everigin</h2>
    <input
      type='text'
      placeholder='Name *'
      required
      class='input-default' />
    <input
      type='email'
      placeholder='Email *'
      required
      class='input-default' />
    <input
      type='password'
      placeholder='Password *'
      required
      class='input-default' />
    <div class='auth-terms'>
      <checkbox />
      <p> I agree to the
        <NuxtLink class='auth-link' to='#'>privacy policy</NuxtLink>
        and
        <NuxtLink class='auth-link' to='#'>the terms of use</NuxtLink>
        , including
        the minimum age requirements.
      </p>
    </div>
    <eve-button square>Create an account</eve-button>
    <div class='auth-alternative'>
      <div class='auth-alternative__social'>
        <span>Log in using</span>
        <img src='/icons/vk.svg' alt=''>
        <img src='/icons/facebook.svg' alt=''>
      </div>
      <div class='auth-alternative__have-account'>
        <span>Already have an account?</span>
        <NuxtLink to='/auth/login' class='eve-button eve-button--square'>Enter</NuxtLink>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
