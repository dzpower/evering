<template>
  <div class="item-page settings-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <h2 class="default-h2 bordered">
            <NuxtLink v-if="$device.isMobile" class="default-h2__back" to="/profile/settings">
              <img src="/icons/slider-arrows.svg" alt="back button">
            </NuxtLink>
            Conversations
          </h2>

          <form class="settings-page__checkboxes">
            <CheckboxFilter>Show on page</CheckboxFilter>
          </form>
          <p class="notice">Conversations provide an opportunity for community members to actively discuss important topics</p>

          <div class="settings-page__sub-title">
            Community Conversations
          </div>

          <div class="settings-page__add-button">
            <button class="eve-button">
              <img src="/icons/plus.svg" alt="add">
            </button>
            <span>Add a Conversation</span>
          </div>
        </div>
        <div v-if="$device.isDesktop" class="item-page__rightcol">
          <CommunityInfo />
          <SettingsNav />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Navbar from '@/components/views/pages/profile/Navbar';
import CommunityInfo from '@/components/views/pages/settings/CommunityInfo';
import CheckboxFilter from '@/components/ui-common/CheckboxFilter';
import SettingsNav from '@/components/views/pages/settings/SettingsNav';

export default {
  components: {SettingsNav, CheckboxFilter, CommunityInfo, Navbar},
  data: () => {
    return {
      links: [
        {
          title: 'Information',
          href: 'basic',
        },
        {
          title: 'Sections',
          href: 'sections',
        },
        {
          title: 'Statistics',
          href: 'statistic'
        },
        {
          title: 'Messages',
          href: 'messages'
        },
        {
          title: 'Conversations',
          href: 'conversations'
        },
        {
          title: 'Managers',
          href: 'managers'
        },
        {
          title: 'Blacklist',
          href: 'blacklist'
        },
        {
          title: 'Participants',
          href: 'participants'
        },
        {
          title: 'Notifications',
          href: 'notifications'
        }
      ]
    }
  }
}
</script>
