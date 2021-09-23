<template>
  <div class='expert-response'>
    <figure>
      <img src='/index-ex-r.png' alt=''>
      <figcaption>
        <span class='title'>
          {{ title }}
        </span>
        <p>
          {{ content }}
        </p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'ExpertResponse',
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    }
  }
</script>
