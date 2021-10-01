<template>
  <div class="draft">
    <div class="draft__image default-photo">
      <img src="/content/01.png" alt="image">
    </div>
    <div class="draft__desc">
      <span class="draft__date">10.08.2021</span>
      <div class="draft__title">How to get to the exhibition</div>
    </div>
    <EveButton class="draft__btn">Go back to editing</EveButton>
  </div>
</template>

<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "Draft",
  components: {EveButton}
}
</script>
