<template>
  <div class='rating'>
    <img
      v-for='star in stars'
      :key='star'
      src='/icons/star.svg'
     alt=''>
    <img
      v-for='star in 5 - stars'
      :key='star'
      src='/icons/star-dis.svg'
      alt=''>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    stars: {
      type: Number,
      default: 1
    }
  }
}
</script>
