<template>
  <footer class="footer">
    <div class="footer-nav">
      <div class="wrapper">
        <span class="footer-nav__item">Market</span>
        <span class="footer-nav__item">Sell</span>
        <span class="footer-nav__item">About the company</span>
        <span class="footer-nav__item">Help</span>
        <span class="footer-nav__item">Contacts</span>
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
        <button class="footer-link footer-currency">$(USD)</button>

        <span class="footer-link footer-copyright">© Everigin</span>

        <a href="#" class="footer-link">Terms of Use</a>
        <a href="#" class="footer-link">Privacy</a>
        <a href="#" class="footer-link">Interest-based ads </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
