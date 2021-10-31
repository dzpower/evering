<template>
  <div class="video-news news-item">
    <NewsHead />
    <div class="video-news__videos">
      <DefaultVideo
        v-for="n in 2"
        :key="n"
      />
    </div>
    <ActionBar like-button comment-count/>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import DefaultVideo from '@/components/ui-common/DefaultVideo';
import ActionBar from '@/components/ui-common/ActionBar';
export default {
  name: "VideoNews",
  components: {ActionBar, DefaultVideo, NewsHead}
}
</script>
