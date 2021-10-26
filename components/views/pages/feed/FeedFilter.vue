<template>
  <Bar class="feed-filter">
    <CheckboxFilter class="feed-filter__item">Articles</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Comments</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Photo</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Video</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Survey</CheckboxFilter>
    <template #icon>
      <img src="/icons/3-dot.svg" alt="3 dot">
    </template>
  </Bar>
</template>

<script>

import CheckboxFilter from '@/components/ui-common/CheckboxFilter';
import Bar from '@/components/ui-common/Bar';
export default {
  name: "FeedFilter",
  components: {Bar, CheckboxFilter}
}
</script>
