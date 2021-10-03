<template>
  <div class="result-page profile-page container">
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <AccountBar />

        <h2 class="default-h2 profile-page__title-btn">
          Personal collections
          <Select />
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
          <Select />
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
          <Select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <vue-slick-carousel :variable-width='true' :arrows='true'>
            <DefaultVideo v-for="item in 5" :key="item"></DefaultVideo>
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
            <Event />

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
            <Event />
            <Discussion />
          </div>

          <div class="profile-page-event">
            <Event />
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
  import AccountBar from '@/components/ui-common/ProfileBar'
  import Select from '@/components/ui-common/Select';
  import DefaultVideo from '@/components/ui-common/DefaultVideo';
  import Event from '@/components/ui-common/Event'
  import Discussion from '@/components/ui-common/Discussion';

  export default {
    components: {Discussion, DefaultVideo, Select, Navbar, AccountBar, Event},
  }
</script>
