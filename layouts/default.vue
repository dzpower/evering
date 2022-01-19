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
    if (process.client){
      this.$store.dispatch('content/fetchMenu')
      this.$store.dispatch('content/fetchContent')
      if (this.storage() && !this.$store.getters['users/getUserAuthorized']) {
        this.$store.dispatch('users/setToken', this.storage())
      }
    }
  },
  methods: {
    storage(){
      if (process.client){
        return localStorage.getItem('uid')
      }
    }
  }
}
</script>
