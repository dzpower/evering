<template>
  <nav class='profile-page-navbar'>
    <NuxtLink
      v-for='(link, index) in links'
      :key='index'
      :class="getActiveLink(link.to)"
      :to='link.to'>
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          title: 'My page',
          to: '/profile'
        },
        {
          title: 'Following/Followers',
          to: '/profile/following'
        },
        {
          title: 'Messages',
          to: '/profile/messages'
        },
        {
          title: 'Communities',
          to: '/profile/communities'
        },
        {
          title: 'My sales',
          to: '/profile/sales'
        },
        {
          title: 'My purchases',
          to: '/profile/purchases'
        },
        {
          title: 'My suggestions',
          to: '/profile/suggestions'
        },
        {
          title: 'Drafts',
          to: '/profile/drafts'
        },
        {
          title: 'Settings',
          to: '/profile/settings'
        }
      ]
    }
  },
  computed: {
    getActiveLink() {
      return (to) => {
        return this.$route.path === to  ? 'profile-page-navbar__navlink active' : 'profile-page-navbar__navlink'
      }
    }
  }
}
</script>
