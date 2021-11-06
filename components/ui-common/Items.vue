<template>
  <div class="items">
    <div class="items__header">
      <h2 class="default-h2">{{title}}</h2>
      <Pagination v-if="$device.isDesktop" />
      <slot name="element"></slot>
    </div>
    <div class="items__body">
      <slot />
    </div>
    <div class="items__footer">
      <Pagination />
    </div>
  </div>
</template>

<script>

import Pagination from '@/components/ui-common/Pagination';
export default {
  name: "Items",
  components: {Pagination},
  props: {
    title: {
      type: String,
    }
  },
}
</script>

