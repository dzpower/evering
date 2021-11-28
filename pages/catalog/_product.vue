<template>
  <div class='item-page catalog-product container'>
    <main class='main'>
      <router-tabs
        :items='tabs'
      />
      <div class='item-page__columns'>
        <div v-if="$device.isDesktop" class="item-page__leftcol">
          <Photos />
        </div>
        <div class='item-page__content catalog-product__content'>
          <Preview>
            <template #body>
              <eve-button class="product-gallery__button">
                <strong>Go to the seller's page</strong>
              </eve-button>
            </template>
          </Preview>

          <AddCart v-if="$device.isMobile" />

          <p class='default-text'>
            Since the first release of the doll, the manufacturer has relied on quality: professional fashion designer
            Charlotte Johnson develops outfits for it, which later became legendary and recognizable; artist Betty Lou
            Mabey creates the first promotional photos and a literary image of Barbie for catalogs and the future
            magazine "Barbie Magazine". Since the first release of the doll, the manufacturer has relied on quality:
            professional fashion designer Charlotte Johnson develops outfits for it, which later became legendary and
            recognizable; artist Betty Lou Mabey creates the first promotional photos and a literary image of Barbie for
            catalogs and the future magazine "Barbie Magazine".Since the first release of the doll, the manufacturer has
            relied on quality: professional fashion designer Charlotte Johnson develops outfits for it, which later
            became legendary and recognizable; artist Betty Lou Mabey creates the first promotional photos and a
            literary image of Barbie for catalogs and the future magazine "Barbie Magazine".
          </p>
          <h2 class='default-h2'>Popular articles</h2>
          <div class='catalog-product__articles'>
            <Slider :slides="3">
              <post-interesting
                v-for='i in 6'
                :key='i'
              />
            </Slider>
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
import Slider from '@/components/ui-common/Slider';

export default {
  components: {
    Videos,
    AddCart,
    Preview,
    PostInteresting,
    Photos,
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
