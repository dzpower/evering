<template>
  <div class="comment-event news-item">
    <NewsHead/>
    <discussion class="comment-event__discussion" />
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
export default {
  name: "CommentEvent",
  components: {NewsHead}
}
</script>
