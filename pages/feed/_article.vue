<template>
  <div class='item-page article-page prod'>
    <main class='main'>
      <div class='item-page__columns'>
        <div class="item-page__leftcol">
          <FilterBar />
          <search-field v-if="$device.isMobile" placeholder="search in the news" />
        </div>
        <div class='item-page__content'>
          <div class="article-page__tags">
            <tag
              v-for="(tag, index) in tags"
              :key="index"
              :href="tag.link"
            >
              {{tag.name}}</tag>
          </div>
          <h2 class="default-h2 article-page__title">Reviews of collectible novelties</h2>

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
              <span>5345</span>
            </div>
            <eve-button v-if="$device.isDesktopOrTablet" icon>
              Like
              <template #icon>
                <img src="/icons/like.svg" alt="like">
              </template>
            </eve-button>
            <div class="action-bar__comments-count" >
              <img src="/icons/comments.svg" alt="like">
              176 comments
            </div>
            <button class="action-bar__comments">
              COMMENTS
              <img src="/icons/plus.svg" alt="plus">
            </button>
          </div>

          <div class="article-page__comments">
            <div class="reviews-items">
              <review
                v-for="item in 3"
                :key="item"
              />
              <pagination />
            </div>
          </div>
        </div>

        <div class='item-page__rightcol'>
          <search-field v-if="$device.isDesktopOrTablet" placeholder="search in the news" />

          <div class="article-page__cats">
            <NuxtLink to="#" class="eve-button article-page__category">Barbie</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Collectible dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">The best articles</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Collectible dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Barbie</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Collectible dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">The best articles</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Collectible dolls</NuxtLink>
            <NuxtLink to="#" class="eve-button article-page__category">Collectible dolls</NuxtLink>
          </div>

          <h2 class="default-h2">See also</h2>
          <div class="feed-page__articles">
            <Article
              v-for="item in 5"
              :key="item"
            />
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>

import SearchField from '@/components/ui-common/SearchField';
import Article from "@/components/views/pages/brands/Article"
import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import Review from '@/components/ui-common/Review';
import Pagination from '@/components/ui-common/Pagination';
import FilterBar from '@/components/ui-common/FilterBar';
export default {
  components: {
    FilterBar,
    Pagination,
    Review,
    NewsHead,
    SearchField,
    Article
  },
  data() {
    return {
      tags: [
        {
          name: 'Fashion',
          link: '#'
        },
        {
          name: 'Collectible',
          link: '#'
        },
        {
          name: 'Popular',
          link: '#'
        },
        {
          name: 'New products',
          link: '#'
        },
        {
          name: 'Recommendations',
          link: '#'
        },
      ]
    }
  }
}
</script>
