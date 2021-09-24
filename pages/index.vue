<template>
  <div class='home container'>
    <main class='main'>
      <div class='experts-responses'>
        <h2 class='default-h2'>
          Expert responses
        </h2>
        <VueSlickCarousel :variable-width='true' :arrows="true">
          <expert-response
            v-for='item in 15'
            :key='item'
            :class='item === 1 ? "first-item" : ""'
            :title='item === 1 ? "Tips from puppet experts" : "New article"'
            :content='item === 1 ? "Hello, everyone. Today I want to tell you a little bit about my creative process, how to create images and collections, and share tips" : "Overview of the wizard"'
          />
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
    </main>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import ExpertResponse from '@/components/views/pages/home/ExpertResponse';

export default {
    components: {
      VueSlickCarousel,
      'expert-response': ExpertResponse
    },
}
</script>
