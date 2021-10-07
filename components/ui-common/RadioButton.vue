<template>
  <label class="radio-button">
    <input :name="name" type="radio" />
    Красный
    <div class="radio-button__decor"></div>
  </label>
</template>

<script>

export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      default: '',
    }
  }
}
</script>
