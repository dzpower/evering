<template>
  <div class='item-page catalog-product'>
    <main class='main'>
      <router-tabs
        :items='tabs'
      />
      <div class='item-page__columns catalog-product__columns'>
        <div v-if="$device.isDesktop" class="item-page__leftcol">
          <Photos />
        </div>
        <div class='item-page__content catalog-product__content'>
          <Preview>
            <template #body>
                <div class="product-info">
                  <span class='product-info__title'>Pullip Alice</span>
                  <div class="product-info__price">1580 $</div>
                  <rating :stars='rating'/>
                </div>
            </template>
          </Preview>

          <AddCart v-if="$device.isMobile" />

          <p v-if="$device.isMobileOrTablet" class="product-description default-text">
            Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future magazine "Barbie Magazine".
          </p>

          <div class='reviews-wrapper'>
            <h2 class='default-h2 '>
              Reviews
              <Select />
            </h2>
            <ActionBar comment-count />
            <div class="reviews-items">
              <Review
                v-for='(item, index) in getSingleProductComments'
                :key='index'
                :item='item'
              />
            </div>

          </div>
        </div>

        <div class='item-page__rightcol'>
          <AddCart v-if="$device.isDesktopOrTablet" />
          <!-- Text -->
          <p v-if="$device.isDesktop" class="product-description default-text">
            Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future magazine "Barbie Magazine".
          </p>

          <h2 class="default-h2 catalog-product__sellers-title">Other sellers</h2>
          <div class="catalog-product__sellers">
            <Seller
              v-for="i in 3"
              :key="i"
            />
          </div>

          <h2 class="default-h2">Amateur photo</h2>
          <div class="default-photo">
            <img src="/content/01.png" alt="">
          </div>

        </div>
      </div>
      <div class='similars-products'>
        <h2 class='default-h2'>
          Similar products
        </h2>
        <Slider>
          <ProductPreview
            v-for='item in 10'
            :key='item'
            :rating='4'
            :price='12222'
          />
        </Slider>
        <div class='home-products__actions'>
          <eve-button class="dark">
            More offers
          </eve-button>
          <eve-button icon>
            <template #icon><img src='/icons/edit.svg' alt=''></template>
            Place an ad
          </eve-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Photos from '@/components/views/pages/product/Photos'
import Preview from '@/components/views/pages/product/Preview'
import AddCart from '@/components/views/pages/product/AddCart'
import ProductPreview from '@/components/views/pages/home/ProductPreview'
import Slider from '@/components/ui-common/Slider'
import Seller from '@/components/ui-common/Seller'
import ActionBar from '@/components/ui-common/ActionBar'
import Select from '@/components/ui-common/Select'
import Review from '@/components/ui-common/Review'

export default {
  components: {
    Select,
    ActionBar,
    Seller,
    AddCart,
    Preview,
    Photos,
    ProductPreview,
    Slider,
    Review,
  },
  data() {
    return {
      rating: 5,
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
    getSingleProductComments() {
      return this.$store.getters['catalog/getSingleProductComments']
    }
  },
  async created() {
    await this.$store.dispatch('catalog/getSingleProduct', this.$route.params.product)
    await this.$store.dispatch('catalog/getSingleProductComments', this.$route.params.product)
  }
}
</script>
