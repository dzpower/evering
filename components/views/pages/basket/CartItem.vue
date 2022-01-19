<template>
  <div v-if='item' class="cart-item">
    <div class="cart-item__image default-photo">
      <img :src="getPicture" alt="cart product image">
    </div>
    <div class="cart-item__wrapper">
    <div class="cart-item__info">
      <div class="cart-item__info-item">
        <strong>{{ item.name }}</strong>
        <s>15800</s>
        <mark>15800</mark>
      </div>
      <div class="cart-item__info-item">
        Price
        <span>{{ item.currency + item.price }}</span>
      </div>
      <div class="cart-item__info-item">
        Shipping
        <span>$0.00</span>
      </div>
    </div>
    <div class="cart-item__buttons">
      <select class="default-select cart-item__select">
        <option
          v-for="i in 20"
          :key="i"
          class="default-select__option"
          :value="i"
          :selected='item.count === i'
        >
          {{i}}
        </option>
      </select>
      <button class="cart-item__delete">
        <img src="/icons/delete.svg" alt="delete">
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getPicture() {
      return this.item.picture ? `https://kukli.promositetest.ru${this.item.picture}.webp` : false
    },
  }
}
</script>
