<template>
  <div class='review' v-if='item'>
    <time datetime='11, 06, 2021'>
      {{ item.date_create.slice(0, 10).replace('-', '.').replace('-', '.') }}
    </time>
    <NuxtLink to='#' class='review-user'>
      <figure>
        <img src='/user-1.png' alt=''>
      </figure>
    </NuxtLink>
    <div class='review-body'>
      <div class='review-user__name'>
        Alexandra Iks
      </div>
      <rating
        :stars='4'
      />
      <p class='review-content'>
        {{item.content}}
      </p>
      <div class='discussion__row'>
        <span class='discussion__likes'>
          <button class='discussion__likes-button'>
            <img src='/icons/like-active.svg' alt='icon'>
          </button>
          <span class='discussion__likes-count'>53</span>
        </span>
        <div class='discussion__reply'>reply</div>
        <a href='#' class='discussion__show --caret-before'>
          Show the answer
        </a>
      </div>
      <div class='review-photos'>
        <img class='review-photos__item' src='/review-photo.png' alt=''>
        <img class='review-photos__item' src='/review-photo.png' alt=''>
        <img class='review-photos__item' src='/review-photo.png' alt=''>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
