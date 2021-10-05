<template>
  <div class="product-gallery">
    <div class="product-gallery__photos">
      <vue-slick-carousel :variable-width='false' :arrows="true">
        <div
          v-for="item in 3"
          :key="item"
          class="default-photo product-gallery__photo"
        >
          <img src="/content/01.png" alt="">
        </div>
        <template #prevArrow>
          <div class="custom-arrow">
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-arrow custom-arrow__next">
          </div>
        </template>
      </vue-slick-carousel>
    </div>
    <div class="product-gallery__other">
      <eve-button class="product-gallery__button">
        <strong>Go to the seller's page</strong>
      </eve-button>
      <vue-slick-carousel class="product-gallery__videos" :variable-width='false' :arrows="false" :dots="true">
        <default-video
          v-for="item in 3"
          :key="item"
        ></default-video>
        <template #dots></template>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>

export default {
  name: "Preview"
}
</script>
