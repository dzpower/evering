<template v-if='item'>
  <div :class="visited ? 'community community--visited' : 'community'">
    <div class="profile-bar__avatar community__avatar" @click='openCommunity'>
      <img :src="getPicture" alt="image" />
    </div>
    <div class="community__wrapper">
      <span
        class="community__name"
        @click='openCommunity'
      >
        {{ item ? item.name : '' }}
      </span>
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
      },
      item: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      getPicture() {
        return this.item.picture ? `https://api.everigin.com${JSON.parse(this?.item?.picture)[0]}.webp` : false
      },
    },
    methods: {
      openCommunity() {
        this.$router.push(`/community/${this.item.id}`)
      }
    }
  }
</script>
