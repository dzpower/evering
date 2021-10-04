<template>
  <div class="brand-event">
    <Event />
    <GalleryTiles />
    <ActionBar />
  </div>
</template>

<script>

import Event from '@/components/ui-common/Event';
import ActionBar from '@/components/ui-common/ActionBar';
import GalleryTiles from '@/components/ui-common/photos/GalleryTiles';

export default {
  name: "BrandEvent",
  components: {GalleryTiles, ActionBar, Event}
}
</script>
