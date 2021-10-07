<template>
  <div class="photo-news news-item">
    <NewsHead />
    <GalleryTiles class="photo-news__gallery" :count="5" />
    <!-- Action Bar -->
    <div class="action-bar action-bar--full">
      <div class="action-bar__likes">
        <button>
          <img src="/icons/like-active.svg" alt="like">
        </button>
        <span>5345</span>
      </div>
      <eve-button icon>
        Like
        <template #icon>
          <img src="/icons/like.svg" alt="like">
        </template>
      </eve-button>
      <div class="action-bar__comments-count">
        <img src="/icons/comments.svg" alt="like">
        176 comments
      </div>
      <button class="action-bar__comments">
        COMMENTS
        <img src="/icons/plus.svg" alt="plus">
      </button>
    </div>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import EveButton from '@/components/ui-common/EveButton';
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';
export default {
  name: "PhotoNews",
  components: {GalleryTiles, EveButton, NewsHead}
}
</script>
