<template>
  <NuxtLink :to='`blogs/${item.id}`' class='expert-response'>
    <figure>
      <img :src='getPicture' :alt='getPicture'>
      <figcaption>
        <span  v-if='item.content' class='title'>
          {{ item.content }}
        </span>
        <p v-if='item.content'>
          {{ item.content }}
        </p>
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script>
  export default {
    name: 'BlogPost',
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
    }
  }
</script>
