<template>
  <div class="feed-filter">
    <CheckboxFilter class="feed-filter__item">Articles</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Comments</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Photo</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Video</CheckboxFilter>
    <CheckboxFilter class="feed-filter__item">Survey</CheckboxFilter>
  </div>
</template>

<script>

import CheckboxFilter from '@/components/ui-common/CheckboxFilter';
export default {
  name: "FeedFilter",
  components: {CheckboxFilter}
}
</script>
