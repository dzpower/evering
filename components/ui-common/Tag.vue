<template>
  <NuxtLink
    :to='href'
    class="default-tag"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: "Tag",
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
