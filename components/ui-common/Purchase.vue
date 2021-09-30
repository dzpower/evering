<template>
  <div class="purchase">
    <div class="purchase__image default-photo">
      <img src="/content/01.png" alt="purchase image">
    </div>
    <div class="purchase__wrapper">
      <div class="purchase__info">
        <div class="purchase__item">
          <div class="purchase__item-head">Name</div>
          <div class="purchase__item-value">Pullip optical Queen</div>
        </div>
        <div class="purchase__item">
          <div class="purchase__item-head">Date</div>
          <div class="purchase__item-value">08.20.2021</div>
        </div>
        <div class="purchase__item">
          <div class="purchase__item-head">Seller</div>
          <div class="purchase__item-value">Store Name</div>
        </div>
        <div class="purchase__item">
          <div class="purchase__item-head">Payment</div>
          <div class="purchase__item-value">Paid for</div>
        </div>
        <div class="purchase__item">
          <div class="purchase__item-head">Delivery</div>
          <div class="purchase__item-value">Express</div>
        </div>
        <div class="purchase__item">
          <div class="purchase__item-head">Status</div>
          <div class="purchase__item-value">Received</div>
        </div>

      </div>
      <EveButton class="purchase__button">Go to the store</EveButton>
    </div>
  </div>
</template>

<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "Purchase",
  components: {EveButton}
}
</script>
