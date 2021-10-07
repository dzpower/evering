<template>
  <div class="video-news news-item">
    <NewsHead />
    <div class="video-news__videos">
      <DefaultVideo
        v-for="n in 2"
        :key="n"
      />
    </div>
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
import DefaultVideo from '@/components/ui-common/DefaultVideo';
import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "VideoNews",
  components: {EveButton, DefaultVideo, NewsHead}
}
</script>
