<template>
  <label class="checkbox">
    <input :type="type" :checked='value' @input='onInput($event.target.checked)'>
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
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e)
    }
  }
}
</script>
