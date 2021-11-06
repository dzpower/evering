<template>
  <div class="result-page marketplace container">
    <main class="main">
      <div class="result-page__aside marketplace__aside">
        <FilterBar />
        <a v-if="$device.isMobileOrTablet" href="#" class="result-page-mp-button">Open in the catalog</a>
      </div>
      <div class="result-page-column">
        <div v-if="$device.isDesktop" class="result-page-topbar marketplace-topbar">
          <router-tabs
            :items='tabs'
          />
          <a href="#" class="result-page-mp-button">Open in the catalog</a>
        </div>
        <div class="result-page-tags marketplace-tags">
          <tag
            v-for="(tag, index) in tags"
            :key="index"
            :href="tag.link"
          >
            {{tag.name}}</tag>
        </div>

        <h2 class="default-h2">Hot topics</h2>
        <div class="marketplace-slider">
          <Slider>
            <card
              v-for="item in 8"
              :key="item"
              :to='`${$route.path}/${item}`'
            ></card>
          </Slider>
        </div>

        <Items>
          <ProductPreview
            v-for='item in 20'
            :key='item'
            :rating='4'
            :price='12222'
          />
          <template #element>
            <div class="result-page-sort">
              <span class="result-page-sort__label">Sorting</span>
              <Select />
            </div>
          </template>
        </Items>

      </div>
    </main>
  </div>
</template>

<script>
  import ProductPreview from '@/components/views/pages/home/ProductPreview';
  import FilterBar from '@/components/ui-common/FilterBar';
  import Select from '@/components/ui-common/Select';
  import Slider from '@/components/ui-common/Slider';
  import Items from '@/components/ui-common/Items';

  export default {
    components: {
      Items,
      Slider,
      Select,
      FilterBar,
      ProductPreview,
    },
    data() {
      return {
        tags: [
          {
            name: 'Fashion',
            link: '#'
          },
          {
            name: 'Collectible',
            link: '#'
          },
          {
            name: 'Popular',
            link: '#'
          },
          {
            name: 'New products',
            link: '#'
          },
          {
            name: 'Recommendations',
            link: '#'
          },
        ],
        tabs: [
          {
            tabContent: 'Marketplace',
            link: `/`,
            activeRouter: 'marketplace'
          },
          {
            tabContent: 'All products',
            link: `/marketplace/all`,
            activeRouter: 'all'
          },
          {
            tabContent: 'Purchases',
            link: `/marketplace/purchases`,
            activeRouter: 'purchases'
          },
          {
            tabContent: 'Basket',
            link: `/marketplace/basket`,
            activeRouter: 'basket'
          },
          {
            tabContent: 'Buyer\'s Settings',
            link: `/marketplace/settings`,
            activeRouter: 'settings'
          },
        ]
      }
    }
  }
</script>
