<template>
  <div class="item-page profile-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <router-tabs :items="tabs" />
          <div class="profile-page__profiles">
            <!-- ProfileBar.vue -->
            <div
              v-for="item in 6"
              :key="item"
              class="profile-bar with-buttons"
            >
              <div class="profile-bar__avatar">
                <img src="/content/users/01.png" alt="account">
              </div>
              <div class="profile-bar__wrapper">
                <span class="profile-bar__name">
                  Svetlana
                  <span class="profile-bar__online">online</span>
                </span>
                <span class="profile-bar__status reference__status reference__status--expert">Expert</span>
                <div class="profile-bar__buttons">
                  <eve-button icon class="profile-bar__edit">
                    Write a message
                  </eve-button>
                  <eve-button icon class="profile-bar__edit">
                    Cancel subscription
                  </eve-button>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="item-page__rightcol">
          <search-field  class="profile-page__search" placeholder="Search" />
          <h2 class="default-h2">Recommendations</h2>
          <div class="profile-page__recommendations">
            <reference v-for="item in 4" :key="item" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

  import Navbar from '@/components/views/pages/profile/Navbar';

  export default {
    components: {Navbar},
    data() {
      return {
        tabs: [
          {
            tabContent: 'Following',
            link: `/profile/following`,
            activeRouter: 'following'
          },
          {
            tabContent: 'Followers',
            link: `/profile/followers`,
            activeRouter: 'followers'
          }
        ]
      }
    }
  }
</script>
