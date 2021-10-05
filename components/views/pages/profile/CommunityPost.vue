<template>
  <div class="community-post">
    <Event />
    <GalleryTiles />
    <ActionBar />

    <div class="community-post__reviews">
      <Review v-for="i in 2" :key="i" />
    </div>

    <div class="community-post__pagination">
      <Pagination />
    </div>
  </div>
</template>

<script>

import Event from '@/components/ui-common/Event';
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';
import ActionBar from '@/components/ui-common/ActionBar';
import Review from '@/components/ui-common/Review';
import Pagination from '@/components/ui-common/Pagination';

export default {
  name: "CommunityPost",
  components: {Pagination, Review, ActionBar, GalleryTiles, Event}
}
</script>
