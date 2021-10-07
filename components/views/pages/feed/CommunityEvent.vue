<template>
  <div class="community-event news-item">
    <NewsHead/>
    <div class="community-event__banner">
      <img src="/content/banners/01.jpg" alt="">
    </div>
    <eve-button class="community-event__join">Join</eve-button>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "CommunityEvent",
  components: {EveButton, NewsHead}
}
</script>
