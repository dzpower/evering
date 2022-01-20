<template>
  <div class="items">
    <div class="items__header">
      <h2 class="default-h2">{{title}}</h2>
      <slot name="element"></slot>
    </div>
    <div class="items__body">
      <slot />
    </div>
    <div class="items__footer">
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  components: {},
  props: {
    title: {
      type: String,
    }
  },
}
</script>

