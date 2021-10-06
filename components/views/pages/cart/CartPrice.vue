<template>
  <div class="cart-price">
    <strong class="cart-price__title">Order Summary</strong>
    <ul class="cart-price__list">
      <li class="cart-price__list-item">
        Subtotal (1 item)
        <span>$18.90</span>
      </li>
      <li class="cart-price__list-item">
        Shipping
        <span>$0.00</span>
      </li>
      <li class="cart-price__list-item">
        Sales Tax
        <span>$0.00</span>
      </li>
      <li class="cart-price__list-item">
        <strong>Order Total</strong>
        <strong>$18.90</strong>
      </li>
    </ul>
    <div class="cart-price__buttons">
      <EveButton class="dark">CHECKOUT</EveButton>
      <EveButton>Continue shopping</EveButton>
    </div>
    <strong class="cart-price__title">We Accept:</strong>
    <div class="cart-price__payments">
      <img src="/payments/visa.svg" alt="payment" class="cart-price__payment">
      <img src="/payments/amex.svg" alt="payment" class="cart-price__payment">
      <img src="/payments/discover.svg" alt="payment" class="cart-price__payment">
      <img src="/payments/mc.svg" alt="payment" class="cart-price__payment">
    </div>
    <div class="cart-price__payment-text">
      <img src="/payments/paypal.svg" alt="payment" class="cart-price__payment">
      <span>
        Pay with your PayPal account
      </span>
    </div>
    <div class="cart-price__payment-text">
      <img src="/payments/klarna.svg" alt="payment" class="cart-price__payment">
      <span>
        Pay in 4 interest-free payments. <a href="#">Learn More</a>
      </span>
    </div>
  </div>
</template>
<script>

import EveButton from '@/components/ui-common/EveButton';
export default {
  name: "CartPrice",
  components: {EveButton}
}
</script>
