<template>
  <div
    v-if='getSingleCommunities'
    class="result-page profile-page container"
  >
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <div class="profile-page__banner">
          <img :src='getPicture' alt="banner">
        </div>
        <div class="profile-page__community-bar community-bar">
          <h2 class="community-bar__title">{{ getSingleCommunities.description }}</h2>
          <span class="community-bar__subs">10000 Following</span>
          <eve-button class="community-bar__btn">Join</eve-button>
        </div>
        <div class="profile-page__columns">
          <div class="profile-page__leftcol">
            <CommunityPost
              v-for="i in 3"
              :key="i"
            />
          </div>
          <div class="profile-page__rightcol">
            <h2 class='default-h2'>Article</h2>
            <div class="brand-page__articles">
              <Article
                v-for="item in 2"
                :key="item"
              />
            </div>

            <h2 class='default-h2'>References</h2>

            <div class="brand-page__references">
              <reference
                :expert="true"
              />
              <reference
                :expert="false"
              />
            </div>

            <h2 class='default-h2'>Photo Albums</h2>
            <div class="brand-page__articles">
              <Article
                v-for="item in 3"
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
import Navbar from '@/components/views/pages/profile/Navbar'
import CommunityPost from '@/components/views/pages/profile/CommunityPost';
import Article from '@/components/views/pages/brands/Article';

export default {
  components: { CommunityPost, Navbar, Article},
  computed: {
    getSingleCommunities() {
      return JSON.parse(JSON.stringify(this.$store.getters['content/getSingleCommunities']))
    },
    getPicture() {
      return `https://api.everigin.com${JSON.parse(this.getSingleCommunities?.picture)}.webp`
    },
  },
  async created() {
    await this.$store.dispatch('content/fetchSingleCommunities', this.$route.params.community)
  }
}
</script>
