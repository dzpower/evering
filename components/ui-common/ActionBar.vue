 <template>
   <div class="action-bar action-bar--full">
     <div v-if="likeBar" class="action-bar__likes">
       <button>
         <img src="/icons/like-active.svg" alt="like">
       </button>
       <span>5345</span>
     </div>
     <eve-button v-if="likeButton && !$device.isMobile" icon>
       Like
       <template #icon>
         <img src="/icons/like.svg" alt="like">
       </template>
     </eve-button>
     <div v-if="commentCount" class="action-bar__comments-count">
       <img src="/icons/comments.svg" alt="like">
       176 comments
     </div>
     <button class="action-bar__comments">
       COMMENTS
       <img src="/icons/plus.svg" alt="plus">
     </button>
   </div>
</template>

<script>

export default {
  name: "ActionBar",
  props: {
    likeBar: {
      type: Boolean,
      default: false,
    },
    likeButton: {
      type: Boolean,
      default: false,
    },
    commentCount: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
