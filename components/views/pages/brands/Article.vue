<template>
  <div class='post-interesting'>
      <figure>
        <img src='/post-img.png' alt=''>
        <figcaption>
          How to get to the exhibition
        </figcaption>
        <NuxtLink :to="to" class="post-interesting__link">Read</NuxtLink>
      </figure>
  </div>
</template>

<script>
export default {
  name: 'PostInteresting',
  props: {
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>
