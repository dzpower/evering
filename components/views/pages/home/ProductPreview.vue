<template>
  <div class='product-preview'>
    <figure>
      <img src='/product-preview.png' alt=''>
    </figure>
    <span class='title'>{{ title }}</span>
    <div class='product-preview__body'>
      <div class='product-preview__body-combiner'>
        <span class='price'>{{ price }}</span>
        <Rating :stars='rating'/>
      </div>
      <button class='buy'>
        <img src='/icons/basket.svg' alt=''>
      </button>
    </div>

  </div>
</template>

<script>
import Rating from '@/components/ui-common/Rating'

export default {
  name: 'ProductPreview',
  components: {
    Rating
  },
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
