<template>
  <div class='home container'>
    <main class='main'>
      <div class='experts-response'>
        <h2 class='default-h2'>
          Expert responses

        </h2>
        <VueSlickCarousel :variableWidth='true' :arrows="true">
          <div>1</div>


        </VueSlickCarousel>
      </div>
    </main>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel  },
}
</script>
