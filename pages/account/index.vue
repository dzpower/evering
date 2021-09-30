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
            <Tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}</Tag>
          </div>
          <a href="#" class="result-page-mp-button">Search in the marketplace</a>
        </div>
        <div class="result-page-middlebar">
          <Pagination />
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <Select />
          </div>
        </div>
        <div class="result-page-list">
          <Card
            v-for="item in 20"
            :key="item"
            :to='`${$route.path}/${item}`'
          ></Card>
        </div>
        <div class="result-page-bottombar">
          <Pagination />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import FilterItem from '@/components/views/pages/catalog/FilterItem'
  import Card from '@/components/ui-common/Card'
  import Tag from '@/components/ui-common/Tag'
  import Pagination from '@/components/ui-common/Pagination'
  import Select from '@/components/ui-common/Select'

  export default {
    components: { Pagination,
      Tag,
      FilterItem,
      Card,
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
