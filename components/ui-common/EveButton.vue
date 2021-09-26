<template>
  <button :class='icon ? "eve-button eve-button--icon" : "eve-button"'>
      <slot name='icon'></slot>
      <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'EveButton',
  props: {
    icon: {
      type: Boolean,
      default: false
    }
  }
}
</script>
