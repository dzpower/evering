<template>
  <div class="pagination">
    <button class="pagination__icon pagination__left">
      <img src="icons/slider-arrows.svg" alt="left">
    </button>
    <div class="pagination__body">
      <span class="pagination__item active">1</span>
      <span class="pagination__item">2</span>
      <span class="pagination__item">3</span>
      <span class="pagination__item">4</span>
      <span class="pagination__item">5</span>
      <span class="pagination__item pagination__other">...</span>
      <span class="pagination__item">120</span>
    </div>
    <button class="pagination__icon pagination__right">
      <img src="icons/slider-arrows.svg" alt="left">
    </button>
  </div>
</template>

<script>
  export default {
    name: "Pagination"
  }
</script>

