<template>
  <div class="gallery-tiles">
    <div
      v-for="item in 3"
      :key="item"
      class="gallery-tiles__item"
    >
      <img src="/content/01.png" alt="product image">
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryTiles"
}
</script>
