<template>
  <label class="radio-button">
    <input
      :name="name"
      type="radio"
      :value='value'
      :checked="isChecked"
      @change="$emit('change', $event.target.value)"
    />

    <div class="radio-button__decor"></div>
    <slot>
      RAdio
    </slot>
  </label>
</template>

<script>

export default {
  name: "RadioButton",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '1'
    },
    modelValue: {
      type: String,
      default: ''
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  }
}
</script>
