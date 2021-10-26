<template>
  <aside class="result-page-filter">
    <div class="result-page-filter__open --caret-after" @click="handleClick">Parameters</div>
    <div :class="`result-page-filter__wrapper ${state && 'active'}`">
      <FilterItem
        v-for="item in 5"
        :key="item"
      ></FilterItem>
      <div class="result-page-filter__close" @click="handleClick">
        <img src="/icons/close.svg" alt="close">
      </div>
    </div>
  </aside>
</template>

<script>

import FilterItem from '@/components/views/pages/catalog/FilterItem';
export default {
  name: "FilterBar",
  components: {FilterItem},
  data: () => {
    return {
      state: false
    }
  },
  methods: {
    handleClick() {
      this.state = !this.state;
    }
  }
}
</script>
