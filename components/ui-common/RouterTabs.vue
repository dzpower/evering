<template>
  <div v-if='items' class="router-tabs">
    <NuxtLink
      v-for='(item, index) in items'
      :key='index'
      :to="item.link"
      :class="path.includes(item.activeRouter) ? 'router-tabs__item active' : 'router-tabs__item'"
    >
     {{ item.tabContent }}
    </NuxtLink>
<!--    <a href="#" class="router-tabs__item active">-->
<!--      Page in the catalog-->
<!--    </a>-->
  </div>
</template>

<script>

export default {
  name: "RouterTabs",
  props: {
    items: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => []
    }
  },
  data() {
    return {
        path: this.$route.path
    }
  }
}
</script>
