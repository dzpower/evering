<template>
  <div v-if='item' class='cart-item'>
    <div class='cart-item__image default-photo'>
      <img :src='getPicture' alt='cart product image'>
    </div>
    <div class='cart-item__wrapper'>
      <div class='cart-item__info'>
        <div class='cart-item__info-item'>
          <strong>{{ item.name }}</strong>
          <div class='cart-item__prices'>
            <mark>{{ item.price }}</mark>
            <s>15800</s>
          </div>
          <ul class='cart-item__info-product'>
            <li>
              Продавец: <strong>DVmarket</strong>
            </li>
            <li>
              Тип товара: <strong>ручная работа</strong>
            </li>
            <li>
              В наличии: <strong>несколько</strong>
            </li>
          </ul>

        </div>
        <div class='cart-item__info-item'>
          Price
          <span>{{ `${item.currency}${item.price * item.count}` }}</span>
        </div>
        <div class='cart-item__info-item'>
        </div>
      </div>
      <div class='cart-item__buttons'>
        <select
          class='default-select cart-item__select'
          @change='changeCountProduct($event)'>
          <option
            v-for='i in 20'
            :key='i'
            class='default-select__option'
            :value='i'
            :selected='item.count === i'
          >
            {{ i }}
          </option>
        </select>
        <button class='cart-item__delete' @click='deleteProduct'>
          <img src='/icons/delete.svg' alt='delete'>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getPicture() {
      return this.item.picture ? `http://ec2-18-196-48-202.eu-central-1.compute.amazonaws.com${this.item.picture}.webp` : false
    }
  },
  methods: {
    changeCountProduct(e) {
      this.$store.dispatch('basket/changeCountInProduct',  { index: this.index, newCount: parseInt(e.target.value) })
    },
    deleteProduct() {
      this.$store.dispatch('basket/deleteProduct', this.index)
    }
  }
}
</script>
