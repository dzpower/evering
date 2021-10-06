<template>
  <div class="item-page profile-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <h2 class="default-h2 profile-page__title-btn">
            My suggestions
            <eve-button>Clear</eve-button>
          </h2>
          <div class="profile-page__suggestions">
            <Article
              v-for="item in 6"
              :key="item"
            />
          </div>
          <h2 class="default-h2">Drafts</h2>
          <div class="profile-page__drafts">
            <draft v-for="i in 5" :key="i" />
          </div>
        </div>
        <div class="item-page__rightcol">
          <search-field class="profile-page__search" placeholder="Community Search" />
          <h2 class="default-h2">Recommendations</h2>
          <div class="profile-page__recommendations">
            <Article
              v-for="item in 4"
              :key="item"
            />
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>

  import Navbar from '@/components/views/pages/profile/Navbar';
  import Article from "@/components/views/pages/brands/Article"

  export default {
    components: {Navbar, Article},
  }
</script>
