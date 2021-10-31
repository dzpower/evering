<template>
  <div class="photo-news news-item">
    <NewsHead />
    <GalleryTiles class="photo-news__gallery" :count="5" />
    <ActionBar like-button comment-count/>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';
import ActionBar from '@/components/ui-common/ActionBar';
export default {
  name: "PhotoNews",
  components: {ActionBar, GalleryTiles, NewsHead}
}
</script>
