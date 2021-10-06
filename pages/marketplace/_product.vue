<template>
  <div class='catalog-product prod'>
    <main class='main'>
      <router-tabs
        :items='tabs'
      />
      <div class='catalog-product__columns'>
        <Photos />
        <div class='catalog-product__content'>
          <Preview></Preview>

          <div class='reviews-wrapper'>
            <h2 class='default-h2'>Reviews</h2>
            <review
              v-for='n in 3'
              :key='n'
            />
          </div>
          <pagination />
        </div>

        <div class='catalog-product__rightcol'>
          <AddCart />
        </div>
      </div>
      <div class='similars-products'>
        <h2 class='default-h2'>
          Similar products
        </h2>
        <vue-slick-carousel :variable-width='true' :arrows='true'>
          <ProductPreview
            v-for='item in 10'
            :key='item'
            :rating='4'
            :price='12222'
          />
          <template #prevArrow>
            <div class='custom-arrow'>
            </div>
          </template>
          <template #nextArrow>
            <div class='custom-arrow custom-arrow__next'>
            </div>
          </template>
        </vue-slick-carousel>
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

export default {
  components: {
    AddCart,
    Preview,
    Photos,
    ProductPreview
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
