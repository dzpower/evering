<template>
  <nav :class="`bar ${ state && 'active' }`">
    <div class="bar__open" @click="handleClick">
      <slot name="icon">
        <img src="/icons/menu-bar.svg" alt="icon">
      </slot>
    </div>
    <div class="bar__wrapper">
      <div class="bar__close" @click="handleClick">
        <img src="/icons/close.svg" alt="close">
      </div>
      <slot></slot>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Bar",
  components: {},
  data: () => {
    return {
      state: false
    }
  },
  methods: {
    handleClick() {
      this.state = !this.state;
    }
  }
}
</script>
