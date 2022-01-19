<template>
  <div class="cart-page container">
    <main class="main">
      <h2 class="default-h2">2 items in your cart</h2>
      <div class="cart-page__columns">
        <div
          v-if='getItemsInBasket'
          class="cart-page__left-col"
        >
          <CartItem
            v-for="(item, index) in getItemsInBasket"
            :key="index"
            :item='item'
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

import CartItem from '@/components/views/pages/basket/CartItem';
import CartPrice from '@/components/views/pages/basket/CartPrice';
export default {
  components: { CartPrice, CartItem },
  computed: {
    getItemsInBasket() {
      return this.$store.getters['basket/getItemsInBasket']
    }
  },
  created() {
    if (this.storage()) {
      this.$store.dispatch('basket/fetchProductsInBasket', this.storage())
    }
  },
  methods: {
    storage() {
      if(process.client) {
        return localStorage.getItem('pids_basket')
      }
    }
  }
}
</script>
