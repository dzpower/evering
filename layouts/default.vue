<template>
  <div>
    <preloader v-if='loader'/>
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
import Preloader from '@/components/ui-common/Preloader'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Default",
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'preloader': Preloader
  },
  middleware ({ store }) {
    store.commit('common/SHOW_PRELOADER')
    return store.dispatch('common/updatePreloader')
  },
  computed: {
    loader() {
      return this.$store.getters['common/getLoader']
    }
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
  mounted() {
    this.$store.commit('common/SHOW_PRELOADER')
    this.$store.dispatch('common/updatePreloader')
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
