<template>
  <div
    v-if='getSingleBlog'
    class='item-page article-page prod'
  >
    <main class='main'>
      <div class='item-page__columns'>
        <div class="item-page__leftcol"/>
        <div class='item-page__combiner'>
          <div class="profile-page__banner">
            <img v-if='getPicture' :src="getPicture" alt="banner">
          </div>
          <div class='item-page__content'>

            <h2 class="default-h2 article-page__title">{{ getSingleBlog.content }}</h2>

            <NewsHead />

            <p class="article-page__text">
              It is no secret that the most favorite doll of both little girls and adult representatives of the fair sex is Barbie. She is so loved by representatives of the beautiful half of humanity that they are ready to take an example from her, adopting her style of clothing. The girl-doll has become a model of style for a huge number of young ladies. The number of clothes present in the Barbie wardrobe is very large. All little girls choose a Barbie doll for themselves, wanting to be like her when they become adults. The Barbie brand offers little princesses not to wait so long, but now to replenish their wardrobe with the outfits of their favorite Barbie.
              <br>
              <br>
              <strong>The history of the appearance of the Barbie brand (Barbie):</strong>
              <br>
              <br>
              The trademark, called Barbie, originated in 1984. This year, the company Siport decided to start manufacturing shoes with this name. A few years later, an English clothing company showed interest in the brand. Soon both companies joined together and became partners, and today the name Barbie is worn by both collections of English women's clothing and collections of Italian shoes. The Barbie trademark considers its primary task to be the creation of such excellent models that will be able to transfer
            </p>

            <div class="article-page__photos">
              <div class="default-photo article-page__photo">
                <img src="/content/01.png" alt="content">
              </div>
              <div class="default-photo article-page__photo">
                <img src="/content/01.png" alt="content">
              </div>
            </div>

            <!-- ActionBar.vue -->
            <div class="action-bar action-bar--full">
              <div class="action-bar__likes">
                <button>
                  <img src="/icons/like-active.svg" alt="like">
                </button>
                <span>{{ getSingleBlog.likes }}</span>
              </div>
              <eve-button v-if="$device.isDesktopOrTablet" icon>
                Like
                <template #icon>
                  <img src="/icons/like.svg" alt="like">
                </template>
              </eve-button>
              <div class="action-bar__comments-count" >
                <img src="/icons/comments.svg" alt="like">
                {{ getSingleBlog.comments }} comments
              </div>
              <button class="action-bar__comments">
                COMMENTS
                <img src="/icons/plus.svg" alt="plus">
              </button>
            </div>

            <div class="article-page__comments">
              <div class="reviews-items">
                <Review
                  v-for="(item, index) in getBlogComments"
                  :key="index"
                  :item='item'
                />
              </div>
            </div>
          </div>
          <div class='item-page__rightcol'>
            <search-field v-if="$device.isDesktopOrTablet" placeholder="search in the news" />
            <h2 class="default-h2">See also</h2>
            <div class="feed-page__articles">
              <Article
                v-for="item in 5"
                :key="item"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import SearchField from '@/components/ui-common/SearchField'
import Article from '@/components/views/pages/brands/Article'
import NewsHead from '@/components/views/pages/feed/news/NewsHead'
import Review from '@/components/ui-common/Review'

export default {
  components: {
    Review,
    NewsHead,
    SearchField,
    Article
  },
  computed: {
    getSingleBlog() {
      return this.$store.getters['content/getSingleBlog']
    },
    getPicture() {
      return this.getSingleBlog.picture ? `http://ec2-18-196-48-202.eu-central-1.compute.amazonaws.com${JSON.parse(this.getSingleBlog.picture)}.webp` : false
    },
    getBlogComments() {
      return this.$store.getters['content/getBlogComments']
    },
  },
  async created() {
    await this.$store.dispatch('content/fetchSingleBlog', this.$route.params.blog)
    await this.$store.dispatch('content/fetchBlogsComments', this.$route.params.blog)
  },
}
</script>
