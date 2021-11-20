<template>
  <div>
    <header-component/>
    <bread-crumbs />
    <Nuxt />
    <email-subscribe />
    <footer-component />
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Default",
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  created() {
    this.$store.dispatch('content/fetchMenu')
    this.$store.dispatch('content/fetchContent')
    this.$store.dispatch('content/fetchTest')
    this.$store.dispatch('news/fetchNews')
  }
}
</script>
