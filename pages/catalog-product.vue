<template>
  <div class="catalog-product prod">
    <main class="main">
      <Tabs />

      <div class="catalog-product__columns">

        <Photos />

        <div class="catalog-product__content">

          <Preview></Preview>

          <p class="default-text">
            Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future magazine "Barbie Magazine". Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future magazine "Barbie Magazine".Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future magazine "Barbie Magazine".
          </p>

          <h2 class="default-h2">Popular articles</h2>

          <div class="catalog-product__articles">

            <VueSlickCarousel :variable-width='true' :arrows="true" :items="3">
              <post-interesting
                v-for='i in 3'
                :key='i'
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

          <h2 class="default-h2">The best photos of buyers</h2>

          <div class="catalog-product__user-photos">

            <div
              v-for="item in 3"
              :key="item"
              class="default-photo"
            >
              <img src="/content/01.png" alt="user photo">
            </div>

          </div>

          <h2 class="default-h2">Group discussions</h2>

          <div class="catalog-product__discussions">

            <Discussion
              v-for="item in 3"
              :key="item"
            />

          </div>

        </div>

        <div class="catalog-product__rightcol">

          <AddCart />

          <h2 class="default-h2">Video</h2>

          <Videos />

        </div>

      </div>
    </main>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Tabs from '@/components/ui-common/Tabs';
import Photos from '@/components/views/pages/product/Photos';
import PostInteresting from '@/components/views/pages/home/PostInteresting';
import Discussion from '@/components/ui-common/Discussion';
import Preview from '@/components/views/pages/product/Preview';
import AddCart from '@/components/views/pages/product/AddCart';
import Videos from '@/components/views/pages/product/Videos';

export default {
    components: {Videos, AddCart, Preview, Discussion, PostInteresting, Photos, Tabs, VueSlickCarousel},
}
</script>
