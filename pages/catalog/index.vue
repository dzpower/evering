<template>
  <div class="result-page catalog container">
    <main class="main">
      <div class="result-page__aside">
        <FilterBar />
        <a v-if="$device.isMobile" href="#" class="result-page-mp-button">Search in the marketplace</a>
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
          <a v-if="$device.isDesktopOrTablet" href="#" class="result-page-mp-button">Search in the marketplace</a>
        </div>

        <Items v-if='getProducts'>
          <ProductPreview
            v-for='(item, index) in getProducts'
            :key='index'
            :item='item'
          />
        </Items>
      </div>
    </main>
  </div>
</template>

<script>
  import FilterBar from '@/components/ui-common/FilterBar'
  import Items from '@/components/ui-common/Items'
  import ProductPreview from '@/components/views/pages/home/ProductPreview'

  export default {
    components: {
      Items,
      FilterBar,
      ProductPreview
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
    },
    created() {
      this.$store.dispatch('catalog/fetchFilters')
    },
    computed: {
      getProducts(state) {
        return this.$store.getters['catalog/getProducts']
      }
    }
  }
</script>
