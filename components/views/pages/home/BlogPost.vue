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
        return this.item.picture ? `https://kukli.promositetest.ru${JSON.parse(this.item.picture)}.webp` : false
      },
    }
  }
</script>
