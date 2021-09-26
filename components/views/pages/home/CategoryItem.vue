<template>
  <NuxtLink class='category-item' :to='to'>
    <figure>
      <img src='/brand.png' alt=''>
      <figcaption>
        <slot>Category</slot>
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>
