<template>
  <div class="item-page settings-page container">
    <main class="main">
      <div class="item-page__columns">
        <div class="item-page__leftcol">
          <Navbar class="item-page-navbar" />
        </div>
        <div class="item-page__content">
          <h2 class="default-h2 bordered">Basic information</h2>

          <form class="settings-page__form">
            <SettingsItem title="Title">
              <EveInput name="title" />
            </SettingsItem>

            <SettingsItem title="Description">
              <EveTextarea name="desc" />
            </SettingsItem>

            <SettingsItem title="Group type">
              <button class="settings-button">Open</button>
            </SettingsItem>

            <SettingsItem title="Cover">
              <button class="settings-button">Choose</button>
            </SettingsItem>

            <SettingsItem title="Address">
              <EveInput name="address" />
            </SettingsItem>

            <div class="settings-item">
              <p class="default-text">
                The community number is club194242444. <br>
                How to choose the right address and whether it is possible to use an <br>
                already occupied one, <NuxtLink to="#">read here</NuxtLink>.
              </p>
            </div>

            <SettingsItem title="Verification">
              <button class="settings-button">Submit an application</button>
            </SettingsItem>

            <eve-button>Save</eve-button>

          </form>
        </div>
        <div class="item-page__rightcol">
          <CommunityInfo />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Navbar from '@/components/views/pages/profile/Navbar';
import CommunityInfo from '@/components/views/pages/settings/CommunityInfo';
import SettingsItem from '@/components/views/pages/settings/SettingsItem';
import EveInput from '@/components/ui-common/EveInput';
import EveTextarea from '@/components/ui-common/EveTextarea';

export default {
  components: {EveTextarea, EveInput, SettingsItem, CommunityInfo, Navbar},
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
