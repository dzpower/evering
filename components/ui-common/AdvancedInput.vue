<template>
  <label :class="value ? 'advanced-input --completed' : 'advanced-input'">
    <input
      type="text"
      class="input-default"
      :required="required"
      :value="value"
      @input="inputHandler"
    >
    <span class="advanced-input__placeholder">{{placeholder}}</span>
  </label>

</template>

<script>

export default {
  name: "AdvancedInput",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      value: ''
    }
  },
  methods: {
    inputHandler(e) {
      this.value = e.target.value
    }
  }
}
</script>
