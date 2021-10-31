<template>
  <div class="manager">
    <div class="reference__avatar manager__avatar">
      <img src="/content/users/02.jpg" alt="user">
    </div>
    <div class="manager__info">
      <span class="manager__name">Alexandra Iks</span>
      <span class="manager__role">Community Creator</span>
    </div>
    <EveButton class="manager__delete">Delete</EveButton>
  </div>
</template>

<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "Manager",
  components: {EveButton}
}
</script>
