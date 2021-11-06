<template>
  <div class="product-gallery">
    <div class="product-gallery__photos">
      <vue-slick-carousel v-if="$device.isDesktopOrTablet" :variable-width='false' :arrows="true">
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
      <div class="product-gallery__btn-wrapper">
        <slot name="body"></slot>
        <eve-button v-if="$device.isMobile" icon class="add-cart__edit">
          <template #icon>
            <img src="/icons/edit.svg" alt="edit">
          </template>
          Edit a page
        </eve-button>
      </div>
      <vue-slick-carousel class="product-gallery__videos" :variable-width='false' :arrows="false" :dots="true">
        <default-video
          v-for="item in 3"
          :key="item"
        ></default-video>
        <div
          v-for="item in 3"
          :key="item"
          class="default-photo product-gallery__photo"
        >
          <img src="/content/01.png" alt="">
        </div>
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
