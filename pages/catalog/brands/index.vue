<template>
  <div class="result-page brands container">
    <main class="main">
      <div class="result-page__aside">
        <FilterBar />
      </div>
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
            <a v-if="$device.isDesktop" href="#" class="result-page-mp-button">Search in the marketplace</a>
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
          <Slider>
            <card
              v-for="item in 8"
              :key="item"
            ></card>
          </Slider>
        </div>

        <h2 class="default-h2">Characters</h2>
        <div class="brands-slider">
          <Slider>
            <card
              v-for="item in 8"
              :key="item"
            ></card>
          </Slider>
        </div>

        <h2 class="default-h2">Top 100 dolls</h2>
        <div class="brands-slider">
          <Slider>
            <card
              v-for="item in 8"
              :key="item"
            ></card>
          </Slider>
        </div>

        <h2 class="default-h2">Top 100 collectors</h2>
        <div class="brands-slider">
          <Slider>
            <card
              v-for="item in 8"
              :key="item"
            ></card>
          </Slider>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  import Slider from '@/components/ui-common/Slider';
  import FilterBar from '@/components/ui-common/FilterBar';

  export default {
    components: {
      FilterBar,
      Slider,
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
