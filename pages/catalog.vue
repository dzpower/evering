<template>
  <div class="catalog container">
    <main class="main">
      <aside class="catalog-filter">

        <FilterItem
          v-for="item in 5"
          :key="item"
        ></FilterItem>

      </aside>

      <div class="catalog-column">
        <div class="catalog-topbar">
          <div class="catalog-tags">

            <Tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}</Tag>

          </div>
          <a href="#" class="catalog-mp-button">Search in the marketplace</a>
        </div>
        <div class="catalog-middlebar">

          <Pagination />

          <div class="catalog-sort">
            <span class="catalog-sort__label">Sorting</span>

            <Select />

          </div>

        </div>
        <div class="catalog-list">

          <Card
            v-for="item in 20"
            :key="item"
          ></Card>

        </div>
        <div class="catalog-bottombar">

          <Pagination />

        </div>
      </div>

    </main>
    <EmailSubscribe />
  </div>
</template>

<script>
  import FilterItem from '@/components/views/pages/catalog/FilterItem';
  import EmailSubscribe from '@/components/ui-common/EmailSubscribe';
  import Card from '@/components/ui-common/Card'
  import Tag from '@/components/ui-common/Tag';
  import Pagination from '@/components/ui-common/Pagination';
  import Select from '@/components/ui-common/Select';

  export default {
    components: {Pagination, Tag, FilterItem, EmailSubscribe, Card, Select},
    data: () => {
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
