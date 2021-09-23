<template>
  <div class='post-interesting'>
      <figure>
        <img src='/post-img.png' alt=''>
        <figcaption>
          How to get to the exhibition
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
  name: 'PostInteresting'
}
</script>
