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
            <tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}
            </tag>
          </div>

        </div>
        <div class="result-page-middlebar brands-middlebar">
          <div class="result-page-sort">
            <pagination />
            <a href="#" class="result-page-mp-button">Search in the marketplace</a>
          </div>
        </div>

        <h2 class="default-h2">Brands</h2>
        <div class="result-page-list">
          <card
            v-for="item in 8"
            :key="item"
            :to="`${$route.path}/${item}`"
          ></card>
        </div>
        <div class="result-page-bottombar brands-bottombar">
          <pagination />
        </div>

        <h2 class="default-h2">Manufacturers</h2>
        <div class="brands-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Characters</h2>
        <div class="brands-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Top 100 dolls</h2>
        <div class="brands-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <card
              v-for="item in 4"
              :key="item"
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

        <h2 class="default-h2">Top 100 collectors</h2>
        <div class="brands-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <card
              v-for="item in 4"
              :key="item"
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

      </div>
    </main>
  </div>
</template>

<script>
  import FilterItem from '@/components/views/pages/catalog/FilterItem'

  export default {
    components: {
      FilterItem
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
