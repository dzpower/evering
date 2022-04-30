<template>
  <div class="profile-bar">
    <modal name="editUser" height='auto' :resizable="true" :adaptive='true'>
      <button class='top-right' @click="$modal.hide('editUser')">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.43272 2.39732L6.7944 5.03564L9.43272 7.67397L7.67384 9.43285L5.03552 6.79453L2.3972 9.43285L0.638321 7.67397L3.27664 5.03564L0.638321 2.39732L2.3972 0.638443L5.03552 3.27676L7.67384 0.638443L9.43272 2.39732Z" fill="#987E8B"/>
        </svg>
      </button>
      <EditModal @close-modal="$modal.hide('editUser')"/>
    </modal>
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
      <eve-button icon class="profile-bar__edit" @onclick="open">
        <template #icon>
          <img src="/icons/edit.svg" alt="edit">
        </template>
        Edit a page
      </eve-button>
    </div>
  </div>
</template>

<script>
import EditModal from '../views/modal/EditModal'

export default {
  name: "ProfileBar",
  components: {
    EditModal
  },
  methods: {
    open() {
      this.$modal.show("editUser")
    }
  }
}
</script>
