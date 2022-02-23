<template>
  <div class="cart-page container">
    <main class="main">
      <h2 class="default-h2">{{ getCountBasket }} items in your cart</h2>
      <div class="cart-page__columns">
        <div
          v-if='getItemsInBasket'
          class="cart-page__left-col"
        >
          <CartItem
            v-for="(item, index) in getItemsInBasket"
            :key="index"
            :item='item'
            :index='index'
          />
        </div>

        <div class="cart-page__right-col">
         <CartPrice
          :price='getFullPrice'
         />
        </div>
      </div>
      <div class='centered-button'>
        <eve-button v-if='getCountBasket' @onclick='$router.push("/order")'>
          Оформить заказ
        </eve-button>
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
    },
    getFullPrice() {
      let price = 0
      for (const prop of this.$store.getters['basket/getItemsInBasket']) {

        price = price + prop.price * prop.count
      }
      return price || 0
    },
    getCountBasket() {
      return this.$store.getters['basket/getCountBasket']
    }
  },
  created() {
    if (this.storage()) {
      this.$store.dispatch('basket/fetchProductsInBasket', this.storage())
    }
    this.$store.commit('basket/SET_PID_IN_BUSKET')
  },
  methods: {
    storage() {
      if(process.client) {
        return localStorage.getItem('pids_basket') || []
      }
    }
  }
}
</script>

<style scoped>
  .centered-button{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 48px;
  }
</style>
