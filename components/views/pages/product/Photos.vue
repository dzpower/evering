<template>
  <div class="product-photos">

    <div
      v-for="item in 6"
      :key="item"
      class="product-photos__item"
    >
      <img src="/content/01.png" alt="product image">
    </div>

  </div>
</template>

<script>
export default {
  name: "Photos"
}
</script>
