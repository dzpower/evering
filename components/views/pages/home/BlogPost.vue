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
        return this.item.picture ? `http://ec2-18-196-48-202.eu-central-1.compute.amazonaws.com${JSON.parse(this.item.picture)}.webp` : false
      },
    }
  }
</script>
