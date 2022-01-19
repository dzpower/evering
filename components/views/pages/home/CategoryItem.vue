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
      return this.item.picture ? `https://kukli.promositetest.ru${JSON.parse(this.item.picture)}.webp` : false
    },
  }
}
</script>
