<template>
  <div @click.stop='$router.push(`catalog/${item.id}`)' class='product-preview' v-if='item'>
    <figure>
      <img :src='getPicture' alt=''>
    </figure>
    <span class='title'>{{ item.name }}</span>
    <div class='product-preview__body'>
      <div class='product-preview__body-combiner'>
        <span v-if='item.price' class='price'>{{ item.price + ' Руб.' }}</span>
        <rating :stars='3'/>
      </div>
      <button class='buy'>
        <img src='/icons/basket.svg' alt=''>
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProductPreview',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    getPicture() {
      const picture = this.item.picture ? JSON.parse(this.item.picture) : 'try more'
      return `https://kukli.promositetest.ru${picture[0].small.webp}`
    },
  },
}
</script>
