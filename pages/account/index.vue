<template>
  <div class="result-page account-page container">
    <main class="main">
      <Navbar class="result-page-navbar" />
      <div class="result-page-column">
        <AccountBar />
        <h2 class="default-h2">My purchases</h2>
        <div class="account-page__purchases">
          <Purchase v-for="item in 4" :key="item" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

  import Navbar from '@/components/views/pages/account/Navbar';
  import AccountBar from '@/components/ui-common/AccountBar'
  import Purchase from '@/components/ui-common/Purchase';

  export default {
    components: {Purchase, Navbar, AccountBar},
  }
</script>
