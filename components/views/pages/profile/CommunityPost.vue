<template>
  <div class="community-post">
    <event />
    <GalleryTiles />
    <action-bar />

    <div class="community-post__reviews">
      <review v-for="i in 2" :key="i" />
    </div>

    <div class="community-post__pagination">
      <pagination />
    </div>
  </div>
</template>

<script>
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';

export default {
  name: "CommunityPost",
  components: {GalleryTiles}
}
</script>
