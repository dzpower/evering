<template>
  <div class="catalog container">
    <main class="main">
      <aside class="catalog-filter">

        <FilterItem
          v-for="item in 5"
          :key="item"
        ></FilterItem>

      </aside>
    </main>
  </div>
</template>

<script>
  import FilterItem from '@/components/views/pages/catalog/FilterItem';
  export default {
    components: {FilterItem}
  }
</script>
