<template>
  <div class="pagination">
    <button class="pagination__button pagination__prev --caret-before">
      <img class="pagination__icon" src="/icons/slider-arrows.svg" alt="left">
      <span>Prev</span>
    </button>

    <!-- Content for Desktop -->
    <div v-if="$device.isDesktop" class="pagination__body">
      <span class="pagination__item active">1</span>
      <span class="pagination__item">2</span>
      <span class="pagination__item">3</span>
      <span class="pagination__item">4</span>
      <span class="pagination__item">5</span>
      <span class="pagination__item pagination__other">...</span>
      <span class="pagination__item">120</span>
    </div>

    <!-- Content for Tablet, Mobile -->
    <div v-if="$device.isMobileOrTablet" class="pagination__body">
      1 - 8 из 105
    </div>

    <button class="pagination__button pagination__next --caret-after">
      <img class="pagination__icon" src="/icons/slider-arrows.svg" alt="right">
      <span>Next</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
  }
</script>

