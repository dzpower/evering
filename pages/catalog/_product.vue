<template>
  <div class='item-page catalog-product container'>
    <main class='main'>
      <router-tabs
        :items='tabs'
      />
      <div class='item-page__columns' v-if='getSingleProduct'>
        <div v-if="$device.isDesktop" class="item-page__leftcol">
          <Photos />
        </div>
        <div class='item-page__content catalog-product__content'>
          <Preview>
            <template #body>
              <div class="product-info">
                <span class="product-info__title">{{ getSingleProduct.name }}</span>
                <div v-if='getSingleProduct.price && getSingleProduct.price !== "0"' class="product-info__price">{{ getSingleProduct.price }} {{ getSingleProduct.currency }}</div>
                <rating :stars='getSingleProduct.vote'/>
              </div>
              <eve-button class="product-gallery__button">
                <strong>Go to the seller's page</strong>
              </eve-button>
            </template>
          </Preview>
          <AddCart
            v-if="$device.isMobile"
            :item='getSingleProduct'
          />
          <HideText v-if='getSingleProduct.content'>
            {{ getSingleProduct.content }}
          </HideText>
          <h2 class='default-h2'>Popular articles</h2>
          <div class='catalog-product__articles'>
            <carousel
              :margin='12'
              :items='3'
              :loop='false'
              :dots='false'
              :responsive="{
                0: { items:2 },
                760: { items:4 },
                1024: { items:3 }
              }">
              <PostInteresting
                v-for='is in 6'
                :key='is'
              />
            </carousel>
          </div>
          <h2 class='default-h2'>The best photos of buyers</h2>
          <div class='catalog-product__user-photos'>
            <div
              v-for='item in 3'
              :key='item'
              class='default-photo'
            >
              <img src='/content/01.png' alt='user photo'>
            </div>
          </div>
          <h2 class='default-h2'>Group discussions</h2>
          <div class='catalog-product__discussions'>
            <discussion
              v-for='item in 3'
              :key='item'
            />
          </div>
        </div>
        <div class='item-page__rightcol'>
          <AddCart v-if="$device.isDesktopOrTablet" edit-button />
          <h2 class='default-h2'>Video</h2>
          <Videos />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Photos from '@/components/views/pages/product/Photos'
import PostInteresting from '@/components/views/pages/home/PostInteresting'
import Preview from '@/components/views/pages/product/Preview'
import AddCart from '@/components/views/pages/product/AddCart'
import Videos from '@/components/views/pages/product/Videos'
import HideText from '@/components/ui-common/HideText';

export default {
  components: {
    Videos,
    AddCart,
    Preview,
    PostInteresting,
    Photos,
    HideText
  },
  data() {
    return {
      tabs: [
        {
          tabContent: 'Page in the catalog',
          link: `/catalog/${this.$route.params.product}`,
          activeRouter: 'catalog'
        },
        {
          tabContent: 'Product on the marketplace',
          link: `/marketplace/${this.$route.params.product}`,
          activeRouter: 'marketplace'
        }
      ]
    }
  },
  computed: {
    getSingleProduct() {
      return this.$store.getters['catalog/getSingleProduct']
    }
  },
  created() {
    this.$store.dispatch('catalog/getSingleProduct', this.$route.params.product)
  }
}
</script>
