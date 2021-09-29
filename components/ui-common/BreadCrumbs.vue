<template>
  <div v-if='$route.name !== "index"' class='wrapper'>
    <ol
      class='breadcrumbs'
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
    >
      <li  typeof="ListItem">
        <NuxtLink property="item" typeof="WebPage" to="/">
          <span>Home</span>
        </NuxtLink>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NuxtLink :to="crumb.path">
        <span property="name">{{
            $route.fullPath === crumb.path && title !== null ? title : crumb.title
          }}</span>
        </NuxtLink>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </div>

</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  name: 'BreadCrumbs',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

<style scoped lang='scss'>
.breadcrumbs {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 16px;

  li {
    display: inline;

    &::after {
      content: ' / ';
      display: inline;
      font-size: 0.9em;
      color: #aaa;
      padding: 0 0.0725em 0 0.15em;
    }

    &:last-child::after {
      content: '';
    }
  }



  li a {
    color: black;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    text-decoration: none;
  }

  li a.nuxt-link-exact-active.nuxt-link-active {
    font-weight: bold;
  }
}
</style>
