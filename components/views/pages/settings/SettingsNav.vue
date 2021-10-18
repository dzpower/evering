<template>
  <div class="settings-nav">
    <NuxtLink
      v-for="link in links"
      :key="link.title"
      :to="link.href"
      class="settings-nav-item"
    >
      <img src="/icons/comments.svg" alt="comments" class="settings-nav-item__icon">
      <span class="settings-nav-item__title">{{link.title}}</span>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  name: "SettingsNav",
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
