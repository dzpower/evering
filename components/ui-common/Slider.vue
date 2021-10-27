<template>
  <div class="custom-slider-wrapper">
    <vue-slick-carousel
      ref="carousel"
      class="custom-slider"
      v-bind="init"
      :variable-width="variableWidth"
      :arrows="true"
    >
      <slot />
      <!-- Desktop Navigation -->
      <template v-if="$device.isDesktop" #prevArrow>
        <div class='custom-arrow custom-arrow__prev'></div>
      </template>
      <template v-if="$device.isDesktop" #nextArrow>
        <div class='custom-arrow custom-arrow__next'></div>
      </template>
    </vue-slick-carousel>
    <div v-if="$device.isMobileOrTablet" class="custom-slider__navigation">
      <div class="custom-slider__slide-info">
        1 - 8 из 105
      </div>
      <div class="custom-slider__buttons">
        <div
          class="custom-slider__button custom-slider__prev --caret-before"
          @click="prevSlide"
        >
          Previous
        </div>
        <div
          class="custom-slider__button custom-slider__next --caret-after"
          @click="nextSlide"
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
    tabletSlides: { type: Number, default: 2 },
    initialSlide: { type: Number, default: 0 },
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

        // Initial Slide
        initialSlide: this.initialSlide,

        // Rows
        rows: this.rows,

        responsive: [
          // Desktop Breakpoint
          {
            breakpoint: 1340,
            settings: {
              slidesToShow: this.slides,
            }
          },
          // Tablet Breakpoint
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: this.tabletSlides,
            },
          },
        ]
      }
    }
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.next()
    },
    prevSlide() {
      this.$refs.carousel.prev()
    },
  },
}
</script>
