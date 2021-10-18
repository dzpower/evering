<template>
  <label class="settings-label">
    <span class="settings-label__body">
      <slot></slot>
    </span>
    <EveInput class="settings-input__field" type="text"/>
  </label>
</template>

<script>

import EveInput from '@/components/ui-common/EveInput';
export default {
  name: "SettingsLabel",
  components: {EveInput},
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
