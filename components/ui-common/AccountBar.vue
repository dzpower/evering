<template>
  <div class="account-bar">
    <div class="account-bar__avatar">
      <img src="/content/users/01.png" alt="account">
    </div>
    <div class="account-bar__wrapper">
      <span class="account-bar__online">online</span>
      <span class="account-bar__name">Svetlana</span>
      <span class="account-bar__status reference__status reference__status--expert">Expert</span>
      <div class="account-bar__stats">
        <span>10000 Following</span>
        <span>50000 Followers</span>
      </div>
      <EveButton icon class="account-bar__edit">
        <template #icon>
          <img src="/icons/edit.svg" alt="edit">
        </template>
        Edit a page
      </EveButton>
    </div>
  </div>
</template>

<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "Account",
  components: {EveButton}
}
</script>
