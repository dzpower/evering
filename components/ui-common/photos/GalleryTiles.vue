<template>
  <div class="gallery-tiles">
    <div
      v-for="item in count"
      :key="item"
      class="gallery-tiles__item"
    >
      <img src="/content/01.png" alt="product image">
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryTiles",
  props: {
    count: {
      type: Number,
      default: 3,
    }
  }
}
</script>
