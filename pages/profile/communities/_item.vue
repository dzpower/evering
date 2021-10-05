<template>
  <div class="result-page profile-page container">
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <div class="profile-page__banner">
          <img src="/content/banners/01.jpg" alt="banner">
        </div>
        <div class="profile-page__community-bar community-bar">
          <h2 class="community-bar__title">Best of the best</h2>
          <span class="community-bar__subs">10000 Following</span>
          <EveButton class="community-bar__btn">Join</EveButton>
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
              <Reference
                :expert="true"
              />
              <Reference
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
  import EveButton from '@/components/ui-common/EveButton';
  import CommunityPost from '@/components/views/pages/profile/CommunityPost';
  import Article from '@/components/views/pages/brands/Article';
  import Reference from '@/components/ui-common/Reference';

  export default {
    components: {Reference, CommunityPost, EveButton, Navbar, Article},
  }
</script>
