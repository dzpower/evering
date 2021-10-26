<template>
  <div class="article-event news-item">
    <NewsHead/>
    <div class="article-event__text">
      <strong>The history of the appearance of the Barbie brand (Barbie):</strong>
      <br>
      <br>
      The trademark, called Barbie, originated in 1984. This year, the company Siport decided to start manufacturing shoes with this name. A few years later, an English clothing company showed interest in the brand. Soon both companies joined together and became partners, and today the name Barbie is worn by both collections of English women's clothing and collections of Italian shoes. The Barbie trademark considers its primary task to be the creation of such excellent models that will be able to transfer Barbie fans to a fabulous atmosphere, give them outfits that match the style of their favorite.
      <br>
      <br>
      <strong>Product range and design:</strong>
      <br>
      <br>
      Today, the Barbie trademark is the most popular brand that produces clothes for children. The Barbie brand is engaged in the...
      <span class="article-event__all --caret-before">Read completely</span>
    </div>
    <div class="article-event__image default-photo">
      <img src="/content/01.png" alt="">
    </div>
    <ActionBar like-button comment-count/>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import ActionBar from '@/components/ui-common/ActionBar';
export default {
  name: "ArticleEvent",
  components: {ActionBar, NewsHead}
}
</script>
