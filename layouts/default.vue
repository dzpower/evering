<template>
  <div>
    <header-component/>
    <Nuxt />
    <footer-component/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

  export default {
    components: {
      'header-component': Header,
      'footer-component': Footer,
    }
  }
</script>
