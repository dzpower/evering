<template>
  <div class="product-videos">
    <default-video
      v-for="item in 5"
      :key="item"
    />
  </div>
</template>

<script>

export default {
  name: "Videos"
}
</script>

