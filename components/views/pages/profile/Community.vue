<template>
  <div :class="visited ? 'community community--visited' : 'community'">
    <div class="profile-bar__avatar community__avatar">
      <img src="/content/users/01.png" alt="image" />
    </div>
    <div class="community__wrapper">
      <span class="community__name">Community Name</span>
      <span v-if="!visited" class="community__subs">3459 participant</span>
    </div>
    <div v-if="!visited" class="community__btn">
      <img v-if="$device.isDesktopOrTablet" src="/icons/3-dot.svg" alt="tool bar">
    </div>
  </div>
</template>

<script>

  export default {
    name: "Community",
    props: {
      visited: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>
