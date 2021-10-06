<template>
  <div class="cart-item">
    <div class="cart-item__image default-photo">
      <img src="/content/01.png" alt="cart product image">
    </div>
    <div class="cart-item__wrapper">
    <div class="cart-item__info">
      <div class="cart-item__info-item">
        <strong>Pullip optical Queen</strong>
        <s>15800</s>
        <mark>15800</mark>
      </div>
      <div class="cart-item__info-item">
        Price
        <span>$18.90</span>
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
}
</script>
