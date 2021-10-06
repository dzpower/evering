<template>
  <div class="profile-bar">
    <div class="profile-bar__avatar">
      <img src="/content/users/01.png" alt="account">
    </div>
    <div class="profile-bar__wrapper">
      <span class="profile-bar__online">online</span>
      <span class="profile-bar__name">Svetlana</span>
      <span class="profile-bar__status reference__status reference__status--expert">Expert</span>
      <div class="profile-bar__stats">
        <span>10000 Following</span>
        <span>50000 Followers</span>
      </div>
      <eve-button icon class="profile-bar__edit">
        <template #icon>
          <img src="/icons/edit.svg" alt="edit">
        </template>
        Edit a page
      </eve-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProfileBar"
}
</script>
