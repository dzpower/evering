<template>
  <footer class="footer">
    <div class="footer-nav">
      <div class="wrapper">
        <NuxtLink
          class="footer-nav__item"
          v-for="(item, index) in getBottomMenu"
          :key='index'
          :to='item.url_full'
        >{{ item.name }}</NuxtLink>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="wrapper">
        <button class="footer-country">
          <img class="footer-country__icon" src="/icons/language.svg" alt="country">
          <span class="footer-country__name">Russia</span>
        </button>
        <button class="footer-link footer-lang">English(US)</button>
        <button class="footer-link footer-currency">$(USD)</button>

        <span class="footer-link footer-copyright">© Everigin</span>

        <NuxtLink
          class="footer-link"
          v-for="(item, index) in getFooterMenu"
          :key='index'
          :to='item.url_full'
        >{{ item.name }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getBottomMenu() {
      return this.$store.getters['content/getMenu']?.bottom ? this.$store.getters['content/getMenu']?.bottom['1'] : []
    },
    getFooterMenu() {
      return this.$store.getters['content/getMenu']?.footer ? this.$store.getters['content/getMenu']?.footer['1'] : []
    }
  }
}
</script>

