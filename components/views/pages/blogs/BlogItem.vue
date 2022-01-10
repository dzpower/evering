<template>
  <div class='blog-item'>
    <div class='blog-item__header'>
      <img src='/user.png' alt=''>
      <div class='blog-item__header--data'>
        <span class='blog-item__header--name'>UserName</span>
        <span class='blog-item__header--status'>
          Expert
        </span>
      </div>
    </div>
    <figure class='blog-item__picture'>
      <img src='/content/01.png' alt=''>
    </figure>
    <p class='blog-item__content'>
      It is no secret that the most favorite doll of both little girls and adult representatives of the fair sex is
      Barbie. She is so loved by representatives of the beautiful half of humanity that they are ready to take an
      example from her, adopting her style of clothing. The girl-doll has become a model of style for a huge number of
      young ladies. The number of clothes present in the Barbie wardrobe is very large. All little girls choose a Barbie
      doll for themselves, wanting to be like her when they become adults. The Barbie brand offers little princesses not
      to wait so long, but now to ...
    </p>
    <div class='blog-item__date-time'>
      12.08.2021 15:33
    </div>
    <action-bar
      :like-bar='true'
      :comment-count='true'
    />
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
