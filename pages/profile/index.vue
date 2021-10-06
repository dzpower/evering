<template>
  <div class="result-page profile-page container">
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <profile-bar />
        <h2 class="default-h2">My purchases</h2>
        <div class="profile-page__purchases">
          <purchase v-for="item in 4" :key="item" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Navbar from '@/components/views/pages/profile/Navbar';

export default {
  components: {Navbar},
}
</script>
