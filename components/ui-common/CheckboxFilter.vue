<template>
  <label class="default-checkbox">
    <input type="checkbox">
    <slot/>
    <span class="default-checkbox__decor"></span>
  </label>
</template>

<script>
export default {
  name: "CheckboxFilter"
}
</script>
