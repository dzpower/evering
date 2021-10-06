<template>
  <div class="result-page profile-page container">
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <profile-bar />

        <h2 class="default-h2 profile-page__title-btn">
          Personal collections
          <select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <div
              v-for="item in 8"
              :key="item"
              class="card"
            >
              <div class="card__preview default-photo">
                <img src="/content/01.png" alt="image">
                <button class="default-photo__like"></button>
              </div>
            </div>
            <template #prevArrow>
              <div class='custom-arrow'>
              </div>
            </template>
            <template #nextArrow>
              <div class='custom-arrow custom-arrow__next'>
              </div>
            </template>
          </vue-slick-carousel>
        </div>

        <h2 class="default-h2 profile-page__title-btn">
          Photo
          <select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <div
              v-for="item in 8"
              :key="item"
              class="card"
            >
              <div class="card__preview default-photo">
                <img src="/content/01.png" alt="image">
                <button class="default-photo__like"></button>
              </div>
            </div>
            <template #prevArrow>
              <div class='custom-arrow'>
              </div>
            </template>
            <template #nextArrow>
              <div class='custom-arrow custom-arrow__next'>
              </div>
            </template>
          </vue-slick-carousel>
        </div>
        <h2 class="default-h2 profile-page__title-btn">
          Video
          <select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <default-video v-for="item in 5" :key="item"></default-video>
            <template #prevArrow>
              <div class='custom-arrow'>
              </div>
            </template>
            <template #nextArrow>
              <div class='custom-arrow custom-arrow__next'>
              </div>
            </template>
          </vue-slick-carousel>
        </div>
        <div class="profile-page__events">
          <div class="profile-page-event">
            <event />
            <div class="profile-page-event__photos">
              <div
                v-for="item in 3"
                :key="item"
                class="default-photo"
              >
                <img src="/content/01.png" alt="photo">
              </div>

            </div>
          </div>
          <div class="profile-page-event">
            <event />
            <discussion />
          </div>
          <div class="profile-page-event">
            <event />
            <div
              class="default-photo profile-page-event__photo"
            >
              <img src="/content/01.png" alt="photo">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/views/pages/profile/Navbar'

  export default {
    components: {Navbar},
  }
</script>
