<template>
  <div @click.stop='$router.push(`feed/${item.id}`)' class='post-interesting' v-if='item'>
      <figure>
        <img :src='getPicture' alt=''>
        <figcaption>
          {{ item.name }}
        </figcaption>
      </figure>
    <div class='post-interesting__body'>
      <NuxtLink class='post-interesting__user' to='#'>
          <img src='/user.png' alt=''>
          <span>Alexandra Iks</span>
      </NuxtLink>
      <p>First of all, you need to decide on the date and city of the event...</p>
      <NuxtLink class='post-interesting__comments' to='#'>
        <img src='/icons/comments.svg' alt=''>
        17 comments
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostInteresting',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getPicture() {
      return this.item.picture ? `http://ec2-18-196-48-202.eu-central-1.compute.amazonaws.com${JSON.parse(this.item.picture)}.webp` : false
    },
  }
}
</script>
