<template>
  <div>
    <header-component />
    <Nuxt />
    <email-subscribe />
    <footer-component />
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EmailSubscribe from '@/components/ui-common/EmailSubscribe'

  export default {
    components: {
      'header-component': Header,
      'footer-component': Footer,
      'email-subscribe': EmailSubscribe,
    }
  }
</script>
