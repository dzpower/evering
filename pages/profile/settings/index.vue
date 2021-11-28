<template>
  <div class="item-page settings-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <h2 class="default-h2">
            Community Settings
          </h2>
          <div v-if="$device.isDesktopOrTablet" class="settings-page__links-group">
            <SettingsCard
              v-for="i in 9"
              :key="i"
              :img="`/stgs/preview/0${i}.jpg`"
              :title="links[i - 1].title"
              :href="links[i - 1].href"
            />
          </div>
          <SettingsNav v-if="$device.isMobile" append />
        </div>
        <div v-if="$device.isDesktop" class="item-page__rightcol">
          <CommunityInfo  with-button />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Navbar from '@/components/views/pages/profile/Navbar';
import CommunityInfo from '@/components/views/pages/settings/CommunityInfo';
import SettingsCard from '@/components/views/pages/settings/SettingsCard';
import SettingsNav from '@/components/views/pages/settings/SettingsNav';

export default {
  components: {SettingsNav, SettingsCard, CommunityInfo, Navbar},
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
