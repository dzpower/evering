<template>
  <div class="add-cart">
    <div class="add-cart__row">
      <EveButton class="dark add-cart__button">
        Buy it now
      </EveButton>
      <EveButton class="add-cart__button">
        Add to cart
      </EveButton>
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
    <EveButton class="dark add-cart__button add-cart__mp">
      Products in the marketplace
    </EveButton>
    <EveButton icon class="add-cart__edit">
      <template #icon>
        <img src="/icons/edit.svg" alt="edit">
      </template>
      Edit a page
    </EveButton>
  </div>
</template>

<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "AddCart",
  components: {EveButton}
}
</script>
