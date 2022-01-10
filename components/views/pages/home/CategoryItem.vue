<template>
  <div v-if='item' class='category-item' @click.stop='$router.push(`community/${item.id}`)'>
    <figure>
      <img :src='getPicture' alt=''>
      <figcaption>
        {{ item.name }}
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getPicture() {
      const picture = this.item.picture ? JSON.parse(this.item.picture) : ''
      return `https://kukli.promositetest.ru${picture[0].big.webp}`
    },
  }
}
</script>
