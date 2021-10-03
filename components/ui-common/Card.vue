<template>
  <NuxtLink
    :to="to"
    class="card catalog-item"
  >
    <div class="card__preview default-photo">
      <img src="/content/01.png" alt="card image">
      <button class="default-photo__like"></button>
    </div>
    <span class="card__title">Pullip optical Queen</span>
  </NuxtLink>
</template>

<script>
export default {
  name: "Card",
  props: {
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>

