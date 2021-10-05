<template>
  <div class="result-page catalog container">
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
              {{tag.name}}</tag>
          </div>
          <a href="#" class="result-page-mp-button">Search in the marketplace</a>
        </div>
        <div class="result-page-middlebar">
          <pagination />
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <select />
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
