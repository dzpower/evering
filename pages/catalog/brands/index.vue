<template>
  <div class="result-page brands container">
    <main class="main">
      <aside class="result-page-filter">
        <FilterItem
          v-for="item in 5"
          :key="item"
        ></FilterItem>
      </aside>
      <div class="result-page-column">
        <div class="result-page-topbar">
          <div class="result-page-tags">
            <Tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}</Tag>
          </div>

        </div>
        <div class="result-page-middlebar brands-middlebar">
          <div class="result-page-sort">
            <Pagination />
            <a href="#" class="result-page-mp-button">Search in the marketplace</a>
          </div>
        </div>

        <h2 class="default-h2">Brands</h2>
        <div class="result-page-list">
          <Card
            v-for="item in 8"
            :key="item"
            :to="`${$route.path}/${item}`"
          ></Card>
        </div>
        <div class="result-page-bottombar brands-bottombar">
          <Pagination />
        </div>

        <h2 class="default-h2">Manufacturers</h2>
        <div class="brands-slider">
          <VueSlickCarousel :variable-width='true' :arrows='true'>
            <Card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Characters</h2>
        <div class="brands-slider">
          <VueSlickCarousel :variable-width='true' :arrows='true'>
            <Card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Top 100 dolls</h2>
        <div class="brands-slider">
          <VueSlickCarousel :variable-width='true' :arrows='true'>
            <Card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Top 100 collectors</h2>
        <div class="brands-slider">
          <VueSlickCarousel :variable-width='true' :arrows='true'>
            <Card
              v-for="item in 4"
              :key="item"
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

  export default {
    components: { Pagination,
      Tag,
      FilterItem,
      Card,
      VueSlickCarousel
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
