<template>
  <form class="registration" @submit.prevent="signUp">
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
      <checkbox :value="'true'" name='agree' @input="user.terms = $event" />
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
export default {
  layout: 'auth',
  data() {
    return {
      errors: false,
      user: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        terms: true,
      },
    }
  },
  methods: {
    signUp() {
      const body = {
        email: this.user.email,
        password: this.user.password,
        confirm_password: this.user.password_confirm,
        name: this.user.name,
      }
      this.errors = !this.user.terms
      if (this.errors) {
        setTimeout(() => {
          this.errors = !this.errors
        }, 600)
      } else {
        this.$store.dispatch('users/signUp', body)
      }
    },
  },
}
</script>
