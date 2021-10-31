<template>
  <form
    class='registration'
    @submit.prevent='userAuth'
  >
    <h2>Create an account on Everigin</h2>
    <input
      v-model='user.name'
      type='text'
      placeholder='Name *'
      required
      class='input-default' />
    <input
      v-model='user.email'
      type='email'
      placeholder='Email *'
      required
      class='input-default' />
    <input
      v-model='user.password'
      type='password'
      placeholder='Password *'
      required
      class='input-default' />
    <div
      :class='errors ? "auth-terms errors-have" : "auth-terms"'
    >
      <checkbox
        :value='user.terms'
        @input='user.terms = $event'
      />
      <p> I agree to the
        <NuxtLink class='auth-link' to='#'>privacy policy</NuxtLink>
        and
        <NuxtLink class='auth-link' to='#'>the terms of use</NuxtLink>
        , including
        the minimum age requirements.
      </p>
    </div>
    <eve-button
      type='submit'
      square>
      Create an account
    </eve-button>
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
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'auth',
  data() {
    return {
      errors: false,
      user: {
        name: 'Dima',
        email: 'dima@user.com',
        password: 'password',
        terms: false
      },
      result: {
        uid: 'A8INZfL7CETiHrTi/287Pp3v4wOnIs7gpSNJXgEDxww1wHnPN/SQEWdkh/ZoslJ+prCfr6v0bEbY8jXrwUws+g==',
        name: 'Ivan',
        email: 'dima@user.com',
        picture: '/user.png'
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions('user', [
      'putUser'
    ]),
    userAuth() {
      this.errors = !this.user.terms
      if (this.errors) {
        setTimeout(() => {
          this.errors = !this.errors
        }, 600)
      } else {
        this.putUser(this.result)
      }
    }
  }
}
</script>
