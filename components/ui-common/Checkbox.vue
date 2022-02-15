<template>
  <label class="checkbox">
    <input :type="type" :name='name' :value='value' @change='change($event.target.value)'>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: String,
      default: 'checkbox'
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    name: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    change(e) {
      this.$emit('change', e)
    }
  }
}
</script>
