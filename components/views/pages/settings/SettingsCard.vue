<template>
  <NuxtLink
    :to="href"
    class="settings-card"
    append
  >
    <div class="default-photo settings-card__preview">
      <img :src="img" alt="photo">
    </div>
    <span class="settings-card__title">{{title}}</span>
  </NuxtLink>
</template>

<script>

export default {
  name: "SettingsCard",
  props: {
    img: {
      type: String,
      default: '/stgs/preview/01.jpg',
    },
    title: {
      type: String,
      default: 'Default Title'
    },
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
