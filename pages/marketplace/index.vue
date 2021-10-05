<template>
  <div class="result-page marketplace container">
    <main class="main">
      <aside class="result-page-filter">
        <FilterItem
          v-for="item in 5"
          :key="item"
        ></FilterItem>
      </aside>
      <div class="result-page-column">
        <div class="result-page-topbar marketplace-topbar">
          <router-tabs />
          <a href="#" class="result-page-mp-button">Open in the catalog</a>
        </div>
        <div class="result-page-tags marketplace-tags">
          <tag
            v-for="(tag, index) in tags"
            :key="index"
            :href="tag.link"
          >
            {{tag.name}}</tag>
        </div>

        <h2 class="default-h2">Hot topics</h2>
        <div class="marketplace-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <card
              v-for="item in 4"
              :key="item"
              :to='`${$route.path}/${item}`'
            ></card>
            <template #prevArrow>
              <div class='custom-arrow'>
              </div>
            </template>
            <template #nextArrow>
              <div class='custom-arrow custom-arrow__next'>
              </div>
            </template>
          </vue-slick-carousel>
        </div>

        <div class="result-page-middlebar">
          <pagination />
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <select />
          </div>
        </div>
        <div class="result-page-list marketplace-list">
          <ProductPreview
            v-for='item in 20'
            :key='item'
            :rating='4'
            :price='12222'
          />
        </div>
        <div class="result-page-bottombar">
          <pagination />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import FilterItem from '@/components/views/pages/catalog/FilterItem'
  import ProductPreview from '@/components/views/pages/home/ProductPreview';

  export default {
    components: {
      ProductPreview,
      FilterItem,
    },
    data() {
      return {
        tags: [
          {
            name: 'Fashion',
            link: '#'
          },
          {
            name: 'Collectible',
            link: '#'
          },
          {
            name: 'Popular',
            link: '#'
          },
          {
            name: 'New products',
            link: '#'
          },
          {
            name: 'Recommendations',
            link: '#'
          },
        ]
      }
    }
  }
</script>
