<template>
  <div class="new-album">
    <div class="new-album__text">
      <span class="new-album__title">Added new photos to the Next album</span>

      <div class="new-album__info">
        <span class="new-album__date">12.08.2021</span>
        <span class="new-album__time">15:33</span>
      </div>
    </div>

    <div class="new-album__body">

      <div
        v-for="item in 3"
        :key="item"
        class="new-album__item"
      >
        <img src="/content/01.png" alt="product image">
      </div>

    </div>

    <div class="new-album__bottom">
      <div class="new-album__likes">
        <button>
          <img src="/icons/like-active.svg" alt="like">
        </button>
        <span>5345</span>
      </div>
      <button class="new-album__comments">
        COMMENTS
        <img src="/icons/plus.svg" alt="plus">
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: "NewAlbum"
}
</script>
