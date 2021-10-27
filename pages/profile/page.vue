<template>
  <div class="result-page profile-page container">
    <main class="main">
      <div class="result-page__aside">
        <Navbar class="result-page-navbar" />
      </div>
      <div class="result-page-column">
        <profile-bar />

        <h2 class="default-h2 profile-page__title-btn">
          Personal collections
          <Select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <Slider :rows="2">
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
          </Slider>
        </div>

        <h2 class="default-h2 profile-page__title-btn">
          Photo
          <Select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <Slider :rows="2">
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
          </Slider>
        </div>
        <h2 class="default-h2 profile-page__title-btn">
          Video
          <Select />
        </h2>
        <div class="result-page-slider profile-page-slider">
          <Slider :rows="2">
            <default-video v-for="i in 5" :key="i"></default-video>
          </Slider>
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
  import Slider from '@/components/ui-common/Slider';
  import Select from '@/components/ui-common/Select';

  export default {
    components: {Select, Slider, Navbar},
  }
</script>
