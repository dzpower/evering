<template>
  <button
    :class='icon ? "eve-button eve-button--icon" : square ? "eve-button eve-button--square" : icon && square ? "eve-button eve-button--icon eve-button--square" : "eve-button"'
  >
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
    },
    square: {
      type: Boolean,
      default: false
    }
  }
}
</script>
