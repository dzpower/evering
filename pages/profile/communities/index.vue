<template>
  <div class="item-page profile-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <h2 class="default-h2 profile-page__title-btn">
            <span class="profile-page__subtitle">Recently visited</span>
            <EveButton>Clear</EveButton>
          </h2>
          <div class="profile-page__visited">

            <!-- Community.vue -->
            <div class="community community--visited">
              <div class="community__avatar profile-bar__avatar">
                <img src="/content/users/01.png" alt="image" />
              </div>
              <div class="community__wrapper">
                <span class="community__name">Community Name</span>
              </div>
            </div>
            <div class="community community--visited">
              <div class="community__avatar profile-bar__avatar">
                <img src="/content/users/01.png" alt="image" />
              </div>
              <div class="community__wrapper">
                <span class="community__name">Community Name</span>
              </div>
            </div>

          </div>
          <RouterTabs :items="tabs" />
          <div class="profile-page__pagination">
            <Pagination/>
          </div>
          <div class="profile-page__communities">
            <Community v-for="item in 5" :key="item" />
          </div>
          <div class="profile-page__pagination">
            <Pagination/>
          </div>
        </div>
        <div class="item-page__rightcol">
          <SearchField class="profile-page__search" placeholder="Search" />
          <h2 class="default-h2">Recommendations</h2>
          <div class="profile-page__recommendations">
            <Community v-for="item in 4" :key="item" class="community--small" />
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>

  import Navbar from '@/components/views/pages/profile/Navbar';
  import SearchField from '@/components/ui-common/SearchField';
  import RouterTabs from '@/components/ui-common/RouterTabs';
  import EveButton from '@/components/ui-common/EveButton';
  import Community from '@/components/views/pages/profile/Community';
  import Pagination from '@/components/ui-common/Pagination';

  export default {
    components: {Pagination, Community, EveButton, RouterTabs, SearchField, Navbar},
    data() {
      return {
        tabs: [
          {
            tabContent: 'Communities',
            link: `/profile/communities`,
            activeRouter: 'communities'
          },
          {
            tabContent: 'Management',
            link: `/profile/management`,
            activeRouter: 'management'
          }
        ]
      }
    }
  }
</script>
