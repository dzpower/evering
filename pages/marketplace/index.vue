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
          <RouterTabs />
          <a href="#" class="result-page-mp-button">Open in the catalog</a>
        </div>
        <div class="result-page-tags marketplace-tags">
          <Tag
            v-for="(tag, index) in tags"
            :key="index"
            :href="tag.link"
          >
            {{tag.name}}</Tag>
        </div>

        <h2 class="default-h2">Hot topics</h2>
        <div class="marketplace-slider">
          <VueSlickCarousel :variable-width='true' :arrows='true'>
            <Card
              v-for="item in 4"
              :key="item"
              :to='`${$route.path}/${item}`'
            ></Card>
            <template #prevArrow>
              <div class='custom-arrow'>
              </div>
            </template>
            <template #nextArrow>
              <div class='custom-arrow custom-arrow__next'>
              </div>
            </template>
          </VueSlickCarousel>
        </div>

        <div class="result-page-middlebar">
          <Pagination />
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <Select />
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
          <Pagination />
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import FilterItem from '@/components/views/pages/catalog/FilterItem'
  import Card from '@/components/ui-common/Card'
  import Tag from '@/components/ui-common/Tag'
  import Pagination from '@/components/ui-common/Pagination'
  import RouterTabs from '@/components/ui-common/RouterTabs'
  import Select from '@/components/ui-common/Select'
  import ProductPreview from '@/components/views/pages/home/ProductPreview';

  export default {
    components: {
      ProductPreview,
      Pagination,
      Tag,
      FilterItem,
      Card,
      VueSlickCarousel,
      RouterTabs,
      Select
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
