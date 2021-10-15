<template>
  <div class='error-page'>
    <NuxtLink
      class='eve-button eve-button--square'
      @click.stop='$router.push("/catalog")'
      to='/catalog'
    >
      To the catalog
    </NuxtLink>
    <img src='/404.png' alt=''>
    <NuxtLink
      class='eve-button eve-button--square'
      @click.stop='$router.push("/catalog")'
      to='/'
    >
      To the main page
    </NuxtLink>
  </div>
</template>
