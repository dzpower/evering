<template>
  <div class="result-page catalog container">
    <main class="main">
      <div class="result-page__aside">
        <FilterBar />
        <a v-if="$device.isMobileOrTablet" href="#" class="result-page-mp-button">Search in the marketplace</a>
      </div>
      <div class="result-page-column">
        <div class="result-page-topbar">
          <div class="result-page-tags">
            <tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}</tag>
          </div>
          <a v-if="$device.isDesktop" href="#" class="result-page-mp-button">Search in the marketplace</a>
        </div>
        <div class="result-page-middlebar">
          <pagination />
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <Select />
          </div>
        </div>
        <div class="result-page-list">
          <card
            v-for="item in 20"
            :key="item"
            :to='`${$route.path}/${item}`'
          ></card>
        </div>
        <div class="result-page-bottombar">
          <pagination />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import FilterBar from '@/components/ui-common/FilterBar';
  import Select from '@/components/ui-common/Select';

  export default {
    components: {
      Select,
      FilterBar,
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
