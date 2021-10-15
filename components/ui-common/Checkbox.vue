<template>
  <label class="checkbox">
    <input type="checkbox" :checked='value' @input='onInput($event.target.checked)'>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e)
    }
  }
}
</script>
