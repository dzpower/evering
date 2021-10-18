<template>
  <label class="settings-item">
    <span class="settings-item__title">
      {{title}}
    </span>
    <slot></slot>
  </label>
</template>

<script>

export default {
  name: "SettingsItem",
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
  }
}
</script>
