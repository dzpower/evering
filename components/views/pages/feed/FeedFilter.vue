<template>
  <div class="feed-filter">
    <Checkbox class="feed-filter__item">Articles</Checkbox>
    <Checkbox class="feed-filter__item">Comments</Checkbox>
    <Checkbox class="feed-filter__item">Photo</Checkbox>
    <Checkbox class="feed-filter__item">Video</Checkbox>
    <Checkbox class="feed-filter__item">Survey</Checkbox>
  </div>
</template>

<script>

import Checkbox from '@/components/ui-common/Checkbox';
export default {
  name: "FeedFilter",
  components: {Checkbox}
}
</script>
