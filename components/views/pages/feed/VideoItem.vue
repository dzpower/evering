<template>
  <div class="video-item">
    <DefaultVideo/>
    <div class="video-item__bottom-bar">
      <div class="video-item__avatar">
        <img src="/content/users/01.png" alt="">
      </div>
      <div class="video-item__wrapper">
        <span class="video-item__title">
          Master class on creating a doll
        </span>
        <br>
        <span class="video-item__views">1780 views</span>
      </div>
    </div>
  </div>
</template>

<script>

import DefaultVideo from '@/components/ui-common/DefaultVideo';
export default {
  name: "VideoItem",
  components: {DefaultVideo}
}
</script>
