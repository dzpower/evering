<template>
  <div class='item-page blog-page prod'>
    <main class='main'>
      <div class='item-page__columns'>
        <div class="item-page__leftcol">
        </div>
        <div class='item-page__content'>
          <h2 class="default-h2">Expert response</h2>
          <div class='blog-page__container'>
            <BlogItem
              v-for='(item, index) in 10'
              :key='index'
            />
          </div>
          <div class="feed-page__posts">
          </div>
        </div>

        <div class='item-page__rightcol'>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BlogItem from '@/components/views/pages/blogs/BlogItem';

export default {
  components: {
    BlogItem
  },
  created() {
    this.$store.dispatch('content/fetchBlogs')
  },
  computed: {
    getBlogs() {
      return this.$store.getters['content/getBlogs']
    }
  }
}
</script>
