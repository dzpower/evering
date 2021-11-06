<template>
  <div class="result-page feed-page video-feed container">
    <main class="main">
      <div class="result-page__aside">
        <FeedFilter />
        <VideoFeedFilter />
      </div>
      <div class="result-page-column">
        <div class="result-page-tags">
          <tag
            v-for="(tag, index) in tags"
            :key="index"
            :href="tag.link"
          >
            {{tag.name}}</tag>
        </div>

        <div class="video-feed__head">
          <h2 class="default-h2">Video</h2>
          <div class="result-page-sort">
            <span class="result-page-sort__label">Sorting</span>
            <Select />
          </div>
          <search-field v-if="$device.isDesktop" placeholder="search in the video" />
        </div>

        <div class="video-feed__videos">
          <VideoItem v-for="i in 12" :key="i" />
        </div>

        <h2 class="default-h2"><strong>New videos</strong></h2>
        <div class="video-feed__videos">

          <VideoItem v-for="i in 4" :key="i" />

        </div>

        <h2 class="default-h2"><strong>Recommended videos</strong></h2>
        <div class="video-feed__videos">

          <VideoItem v-for="i in 4" :key="i" />

        </div>

      </div>
    </main>
  </div>
</template>

<script>

import FeedFilter from '@/components/views/pages/feed/FeedFilter';
import Select from '@/components/ui-common/Select';
import SearchField from '@/components/ui-common/SearchField';
import VideoItem from '@/components/views/pages/feed/VideoItem';
import VideoFeedFilter from '@/components/views/pages/feed/VideoFeedFilter';

export default {
  components: {
    VideoFeedFilter,
    VideoItem,
    SearchField,
    Select,
    FeedFilter,
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
