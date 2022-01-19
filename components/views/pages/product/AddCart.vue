<template>
  <div class="add-cart">
    <div class="add-cart__row">
      <eve-button class="dark add-cart__button">
        Buy it now
      </eve-button>
      <eve-button
         class="add-cart__button"
         @onclick='addToBasket'>
        Add to cart
      </eve-button>
    </div>
    <div class="add-cart__result">
      <div class="add-cart__result-item">
        <span>Total purchased:</span> 2560
      </div>
      <div class="add-cart__result-item">
        <span>In stock:</span> few
      </div>
      <div class="add-cart__result-item">
        <span>In user baskets:</span> 17
      </div>
    </div>
    <eve-button class="dark add-cart__button add-cart__mp">
      Products in the marketplace
    </eve-button>
    <eve-button v-if="editButton" icon class="add-cart__edit">
      <template #icon>
        <img src="/icons/edit.svg" alt="edit">
      </template>
      Edit a page
    </eve-button>
  </div>
</template>

<script>
export default {
  name: "AddCart",
  props: {
    editButton: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    addToBasket() {
      this.$store.dispatch('basket/addToBasket', this.item)
    }
  }
}
</script>
