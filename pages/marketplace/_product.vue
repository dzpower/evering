<template>
  <div class='item-page catalog-product'>
    <main class='main'>
      <router-tabs
        :items='tabs'
      />
      <div class='item-page__columns catalog-product__columns'>
        <div class="item-page__leftcol">
          <Photos v-if="$device.isDesktop" />
        </div>
        <div class='item-page__content'>
          <Preview></Preview>

          <AddCart v-if="$device.isMobileOrTablet" />

          <div class='reviews-wrapper'>
            <h2 class='default-h2'>Reviews</h2>
            <review
              v-for='n in 3'
              :key='n'
            />
          </div>
          <pagination />
        </div>

        <div class='item-page__rightcol'>
          <AddCart v-if="$device.isDesktop" />
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
import Slider from '@/components/ui-common/Slider';

export default {
  components: {
    AddCart,
    Preview,
    Photos,
    ProductPreview,
    Slider
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
  }
}
</script>
