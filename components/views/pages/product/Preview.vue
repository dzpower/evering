<template>
  <div class="product-gallery">
    <div class="product-gallery__photos">
      <VueSlickCarousel :variable-width='false' :arrows="true">
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
      </VueSlickCarousel>
    </div>
    <div class="product-gallery__other">
      <EveButton class="product-gallery__button">
        <strong>Go to the seller's page</strong>
      </EveButton>
      <VueSlickCarousel class="product-gallery__videos" :variable-width='false' :arrows="false" :dots="true">
        <DefaultVideo
          v-for="item in 3"
          :key="item"
        ></DefaultVideo>
        <template #dots></template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import EveButton from '@/components/ui-common/EveButton';
import DefaultVideo from '@/components/ui-common/DefaultVideo';

export default {
  name: "Preview",
  components: {EveButton, VueSlickCarousel, DefaultVideo},
}
</script>
