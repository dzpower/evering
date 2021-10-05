<template>
  <div class='product-preview'>
    <figure>
      <img src='/product-preview.png' alt=''>
    </figure>
    <span class='title'>{{ title }}</span>
    <div class='product-preview__body'>
      <div class='product-preview__body-combiner'>
        <span class='price'>{{ price }}</span>
        <rating :stars='rating'/>
      </div>
      <button class='buy'>
        <img src='/icons/basket.svg' alt=''>
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProductPreview',
  props: {
    title: {
      type: String,
      default: 'Product empty'
    },
    price: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 1
    }
  }
}
</script>
