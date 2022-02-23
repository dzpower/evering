<template>
  <div v-if='item'
       @click.stop='goToProduct'
       class='product-preview'
  >
    <figure v-if='getPicture'>
      <img :src='getPicture' alt=''>
    </figure>
    <span v-if='item.name' class='title'>{{ item.name }}</span>
    <div class='product-preview__body'>
      <div class='product-preview__body-combiner'>
        <span v-if='item.price' class='price'>{{ item.price}}<span> pуб.</span></span>
        <rating :stars='3'/>
      </div>
      <button
        class='buy'
        @click.stop='addToBasket'
      >
        <img src='/icons/basket.svg' alt=''>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreview',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    getPicture() {
      return this.item.picture ? `https://kukli.promositetest.ru${JSON.parse(this.item.picture)[0]}.webp` : false
    },
  },
  methods: {
    goToProduct() {
      this.$router.replace(`catalog/${this.item.id}`)
    },
    addToBasket(e) {
      const removeAnimation = () => setTimeout(function() {
        e.target.classList.remove('adding-animation')
      }, 800)
      clearTimeout(removeAnimation())
      this.$store.dispatch("basket/addToBasket", this.item)
      e.target.classList.add('adding-animation')
      removeAnimation()
    }
  },
}
</script>
