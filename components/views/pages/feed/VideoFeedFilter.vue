<template>
  <div class="video-feed-filter">
    <div v-if="$device.isDesktop" class="video-feed-filter__head">
      <span class="video-feed-filter__title">
        Subscriptions
      </span>
      <Select />
    </div>
    <div v-if="$device.isDesktop" class="video-feed-filter__cats">
      <div class="video-feed-filter__category">
        <img src="/content/users/01.png" alt="">
        <span>Dolls</span>
      </div>
      <div class="video-feed-filter__category">
        <img src="/content/users/01.png" alt="">
        <span>Action figure</span>
      </div>
    </div>
    <div class="video-feed-filter__links">
      <NuxtLink to="#" class="video-feed-filter__link">
        <span>View History</span>
      </NuxtLink>
      <NuxtLink to="#" class="video-feed-filter__link">
        <span>Your videos</span>
      </NuxtLink>
      <NuxtLink to="#" class="video-feed-filter__link">
        <span>Liked</span>
      </NuxtLink>
      <NuxtLink to="#" class="video-feed-filter__link">
        <span>Channels</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>

import Select from '@/components/ui-common/Select';
export default {
  name: "VideoFeedFilter",
  components: {Select}
}
</script>
