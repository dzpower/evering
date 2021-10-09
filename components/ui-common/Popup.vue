<template>
  <div class="popup">
    <div class="popup__image default-photo">
      <img src="/content/01.png" alt="image">
    </div>
    <div class="popup__content">
      <div class="popup__header">
        <!-- ActionBar.vue -->
        <div class="action-bar action-bar--full">
          <div class="action-bar__likes">
            <button>
              <img src="/icons/like-active.svg" alt="like">
            </button>
            <span>5345</span>
          </div>
          <eve-button icon>
            Like
            <template #icon>
              <img src="/icons/like.svg" alt="like">
            </template>
          </eve-button>
          <div class="action-bar__comments-count">
            <img src="/icons/comments.svg" alt="like">
            176 comments
          </div>
          <button class="action-bar__comments">
            COMMENTS
            <img src="/icons/plus.svg" alt="plus">
          </button>
        </div>
      </div>
      <div class="popup__body">
        <!-- Discussion.vue -->
        <div
          v-for="i in 20"
          :key="i"
          class="discussion"
        >
          <div class="discussion__content">
            <div class="discussion__author-avatar">
              <img src="/content/users/01.png" alt="user avatar">
            </div>
            <div class="discussion__author">
              <div class="discussion__row">
                <span class="discussion__author-name">Hapirica Dronova Christina</span>
                <span class="discussion__date">1 year ago</span>
              </div>
              <p class="discussion__author-message">
                We all have friends, relatives, colleagues who do not have to be happy with our dolls
              </p>
              <div class="discussion__row">
          <span class="discussion__likes">
            <button class="discussion__likes-button">
              <img src="/icons/like-active.svg" alt="icon">
            </button>
            <span class="discussion__likes-count">53</span>
          </span>
                <div class="discussion__reply">reply</div>
              </div>
              <a href="#" class="discussion__show --caret-before">
                Show the answer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Popup",
  components: {}
}
</script>
