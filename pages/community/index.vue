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
            <eve-button v-if="$device.isDesktopOrTablet">Clear</eve-button>
          </h2>
          <div class="profile-page__visited">
<!--            <Community-->
<!--              :item='getCommunities[0]'-->
<!--              visited />-->
<!--            <Community-->
<!--              :item='getCommunities[1]'-->
<!--              visited />-->
          </div>
          <router-tabs v-if="$device.isDesktopOrTablet" :items="tabs" />
          <Items class="profile-page__communities">
            <Community
              v-for="(item, index) in getCommunities"
              :key="index"
              :item='item'
            />
          </Items>
        </div>
        <div v-if="$device.isDesktopOrTablet" class="item-page__rightcol">
          <search-field class="profile-page__search" placeholder="Search" />
          <h2 class="default-h2">Recommendations</h2>
          <div class="profile-page__recommendations">
            <Community
              v-for="(item, index) in getCommunities"
              :key="index"
              :item='item'
              class="community--small"
            />
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>

  import Navbar from '@/components/views/pages/profile/Navbar';
  import Community from '@/components/views/pages/profile/Community';
  import Items from '@/components/ui-common/Items';

  export default {
    components: {
      Items,
      Community,
      Navbar
    },
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
    },
    computed: {
      getCommunities() {
        return this.$store.getters['content/getCommunities']
      }
    },
    async created() {
      await this.$store.dispatch('content/fetchCommunities')
    },
    methods: {
      openCommunity() {
        console.log(1)
      }
    }
  }
</script>
