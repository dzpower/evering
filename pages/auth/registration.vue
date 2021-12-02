<template>
  <form class="registration" @submit.prevent="userSignUp">
    <h2>Create an account on Everigin</h2>
    <input
      v-model="user.name"
      type="text"
      placeholder="Name *"
      required
      class="input-default"
    />
    <input
      v-model="user.email"
      type="email"
      placeholder="Email *"
      required
      class="input-default"
    />
    <input
      v-model="user.password"
      type="password"
      placeholder="Password *"
      required
      class="input-default"
    />
    <input
      v-model="user.password_confirm"
      type="password"
      placeholder="Password confirm *"
      required
      class="input-default"
    />
    <div :class="errors ? 'auth-terms errors-have' : 'auth-terms'">
      <checkbox :value="user.terms" @input="user.terms = $event" />
      <p>
        I agree to the
        <NuxtLink class="auth-link" to="#">privacy policy</NuxtLink>
        and
        <NuxtLink class="auth-link" to="#">the terms of use</NuxtLink>
        , including the minimum age requirements.
      </p>
    </div>
    <eve-button type="submit" square> Create an account </eve-button>
    <div class="auth-alternative">
      <div class="auth-alternative__social">
        <span>Log in using</span>
        <img src="/icons/vk.svg" alt="" />
        <img src="/icons/facebook.svg" alt="" />
      </div>
      <div class="auth-alternative__have-account">
        <span>Already have an account?</span>
        <NuxtLink to="/auth/login" class="eve-button eve-button--square"
          >Enter</NuxtLink
        >
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
        password_confirm: 'password',
        terms: false,
      },
    }
  },
  computed: {},
  methods: {
    ...mapActions('users', ['signUp']),
    userSignUp() {
      const formData = new FormData()
      formData.append('email', this.user.email)
      formData.append('name', this.user.name)
      formData.append('password', this.user.password)
      formData.append('password_confirm', this.user.password_confirm)
      this.errors = !this.user.terms
      if (this.errors) {
        setTimeout(() => {
          this.errors = !this.errors
        }, 600)
      } else {
        this.signUp(formData)
      }
    },
  },
}
</script>
