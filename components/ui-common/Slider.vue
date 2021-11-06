<template>
  <div class="custom-slider-wrapper">
    <!-- Destroy slider in tablet, mobile -->
    <vue-slick-carousel
      v-if="$device.isDesktop"
      class="custom-slider"
      v-bind="init"
      :variable-width="variableWidth"
      :arrows="true"
    >
      <slot />
      <template #prevArrow>
        <div class='custom-arrow custom-arrow__prev'></div>
      </template>
      <template #nextArrow>
        <div class='custom-arrow custom-arrow__next'></div>
      </template>
    </vue-slick-carousel>

    <!-- Body -->
    <div v-if="$device.isMobileOrTablet" class="custom-slider__body">
      <slot />
    </div>

    <!-- Pagination -->
    <div v-if="$device.isMobileOrTablet" class="custom-slider__navigation">
      <div class="custom-slider__slide-info">
        1 - 8 из 105
      </div>
      <div class="custom-slider__buttons">
        <div
          class="custom-slider__button custom-slider__prev --caret-before"
        >
          Previous
        </div>
        <div
          class="custom-slider__button custom-slider__next --caret-after"
        >
          Next
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Slider",
  props: {
    slides: { type: Number, default: 4 },
    variableWidth: { type: Boolean, default: false },
    rows: {type: Number, default: 1}
  },
  computed: {
    init () {
      return {
        infinite: false,
        dots: false,
        pagination: false,
        focusOnSelect: true,
        speed: 500,

        // Slides
        slidesToShow: this.slides,

        slidesToScroll: 1,

        // Auto Width
        variableWidth: this.variableWidth,

        // Rows
        rows: this.rows,
      }
    }
  },
}
</script>
