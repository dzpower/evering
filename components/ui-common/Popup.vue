<template>
  <div class="popup">
    <div class="popup__image default-photo">
      <img src="/content/01.png" alt="image">
    </div>
    <div class="popup__content">
      <div class="popup__header">
        <ActionBar
          like-bar
          :comment-count="$device.isDesktop"
          :like-button="$device.isDesktop"
        />
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

import ActionBar from '@/components/ui-common/ActionBar';
export default {
  name: "Popup",
  components: {ActionBar}
}
</script>
