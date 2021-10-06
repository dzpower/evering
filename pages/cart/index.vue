<template>
  <div class="cart-page container">
    <main class="main">
      <h2 class="default-h2">2 items in your cart</h2>
      <div class="cart-page__columns">
        <div class="cart-page__left-col">
          <CartItem
            v-for="item in 3"
            :key="item"
          />
        </div>
        <div class="cart-page__right-col">
         <CartPrice />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import CartItem from '@/components/views/pages/cart/CartItem';
import CartPrice from '@/components/views/pages/cart/CartPrice';
export default {
  components: {CartPrice, CartItem},
}
</script>
