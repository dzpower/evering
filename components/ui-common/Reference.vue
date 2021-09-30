<template>
  <div class="reference">
    <div class="reference__avatar">
      <img src="/content/users/01.png" alt="user">
    </div>
    <div class="reference__info">
      <span class="reference__name">Miroslava</span>
      <span class="reference__status reference__status--expert">Expert</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Reference",
  props: {
    expert: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
