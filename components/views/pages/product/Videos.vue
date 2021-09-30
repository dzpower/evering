<template>
  <div class="product-videos">
    <DefaultVideo
      v-for="item in 5"
      :key="item"
    />
  </div>
</template>

<script>

import DefaultVideo from '@/components/ui-common/DefaultVideo'

export default {
  name: "Videos",
  components: {DefaultVideo}
}
</script>

