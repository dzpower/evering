<template>
  <div class="brand-event">
    <event />
    <GalleryTiles />
    <action-bar />
  </div>
</template>

<script>
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';

export default {
  name: "BrandEvent",
  components: {GalleryTiles}
}
</script>
