 <template>
  <div class="action-bar">
    <div class="action-bar__likes">
      <button>
        <img src="/icons/like-active.svg" alt="like">
      </button>
      <span>5345</span>
    </div>
    <button class="action-bar__comments">
      COMMENTS
      <img src="/icons/plus.svg" alt="plus">
    </button>
  </div>
</template>

<script>

export default {
  name: "ActionBar"
}
</script>
