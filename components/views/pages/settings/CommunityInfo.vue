<template>
  <div :class="`community-info ${!withButton && 'centered'}`">
    <h2 class="community-info__title">Best of the best</h2>
    <span class="community-info__followers">10000 Following</span>
    <eve-button v-if="withButton" class="community-info__goto">Go to the community page</eve-button>
  </div>
</template>

<script>

export default {
  name: "CommunityInfo",
  props: {
    withButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
