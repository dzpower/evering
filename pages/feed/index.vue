<template>
  <div class='item-page feed-page prod'>
    <main class='main'>
      <div class='item-page__columns'>
        <div class="item-page__leftcol">
          <FeedFilter />
        </div>
        <div class='item-page__content'>
          <h2 class="default-h2">News</h2>

          <div class="feed-page__posts">
            <VideoNews />
            <PhotoNews />
            <CommentEvent />
            <CommunityEvent />
            <ArticleEvent />
            <SurveyEvent />
          </div>
        </div>

        <div class='item-page__rightcol'>
          <search-field v-if="$device.isDesktop" placeholder="search in the news" />
          <div v-if="$device.isDesktop" class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <Select />
          </div>

          <h2 class="default-h2">Fixed articles</h2>

          <div class="feed-page__articles">
            <Article
              v-for="item in 3"
              :key="item"
            />
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>

import FeedFilter from '@/components/views/pages/feed/FeedFilter';
import VideoNews from '@/components/views/pages/feed/VideoNews';
import PhotoNews from '@/components/views/pages/feed/PhotoNews';
import CommentEvent from '@/components/views/pages/feed/CommentEvent';
import CommunityEvent from '@/components/views/pages/feed/CommunityEvent';
import ArticleEvent from '@/components/views/pages/feed/ArticleEvent';
import SurveyEvent from '@/components/views/pages/feed/SurveyEvent';
import SearchField from '@/components/ui-common/SearchField';
import Select from '@/components/ui-common/Select';
import Article from "@/components/views/pages/brands/Article"
export default {
  components: {
    Select,
    SearchField,
    SurveyEvent,
    ArticleEvent,
    CommunityEvent,
    CommentEvent,
    PhotoNews,
    VideoNews,
    FeedFilter,
    Article
  },
}
</script>
