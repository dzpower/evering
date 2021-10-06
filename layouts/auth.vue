<template>
  <div class='auth'>
    <header-component login-page/>
    <div class='auth-place'>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
 export default {
   components: {
     'header-component': Header
   }
 }
</script>
