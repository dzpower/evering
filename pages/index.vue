<template>
  <div class='home container'>
    <main class='main' style='display: flex; flex-direction: column'>
      <div
        v-if="getHomeContent.blogs && getHomeContent.blogs.items"
        class='experts-responses'
        :style='`order: ${getHomeContent.blogs.positions}`'
      >
        <h2 class='default-h2'>
          {{ getHomeContent.blogs.title }}
        </h2>
        <carousel
          :margin='12'
          :loop='false'
          :auto-width='true'
          :dots='false'
          class="expert-response__slider">
          <BlogPost
            v-for='(item, index) in getHomeContent.blogs.items'
            :key='index'
            :class='index === 0 ? "first-item" : ""'
            :item='item'
          />
        </carousel>
      </div>
      <div
        v-if='getHomeContent.reviews && getHomeContent.reviews.items'
        class='most-interesting'
        :style='`order: ${getHomeContent.reviews.positions}`'
      >
        <h2 class='default-h2'>{{ getHomeContent.reviews.title }}</h2>
        <carousel
          :margin='12'
          :items='5'
          :responsive="{
            0: { items:2 },
            760: { items:4 },
            1024: { items:5 }
          }"
          :loop='false'
          :dots='false'
          class='most-interesting__slider'>
          <PostInteresting
            v-for='(item, index) in getHomeContent.reviews.items'
            :key='index'
            :item='item'
          />
        </carousel>
        <div class='more-interesting'>
          <eve-button>More interesting things on Everigin</eve-button>
        </div>
      </div>
      <div
        v-if='getHomeContent.category && getHomeContent.category.items'
        class='tag-wrapper'
        :style='`order: ${getHomeContent.category.positions}`'
      >
        <tag
          v-for="(item, index) in getHomeContent.category.items"
          :key="index"
          :href="`category/${item.id}`"
        >
          {{item.name}}
        </tag>
      </div>
      <div
        v-if='getHomeContent.offers && getHomeContent.offers.items'
        class='home-products'
        :style='`order: ${getHomeContent.offers.positions}`'
      >
        <carousel
          :margin='12'
          :items='5'
          :loop='false'
          :dots='false'
          :responsive="{
            0: { items:2 },
            760: { items:4 },
            1024: { items:5 }
          }"
          :mouse-drag='getHomeContent.offers.items.length > 5'
          :pull-drag='getHomeContent.offers.items.length > 5'
          :touch-drag='getHomeContent.offers.items.length > 5'
          class='home-products__slider'>
          <ProductPreview
            v-for='(item, index) in getHomeContent.offers.items'
            :key='index'
            :item='item'
          />
        </carousel>
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
      <div
        v-if='getHomeContent.community && getHomeContent.community.items'
        class='home-categories'
        :style='`order: ${getHomeContent.community.positions}`'
      >
        <carousel
          :margin='12'
          :items='5'
          :loop='false'
          :dots='false'
          :responsive="{
            0: { items:2 },
            760: { items:4 },
            1024: { items:5 }
          }"
          :mouse-drag='getHomeContent.community.items.length > 5'
          :pull-drag='getHomeContent.community.items.length > 5'
          :touch-drag='getHomeContent.community.items.length > 5'
          class='home-categories__slider'>
          <CategoryItem
            v-for='(item, index) in getHomeContent.community.items'
            :key='index'
            :item='item'
          />
        </carousel>
      </div>
      <div
        v-if='getHomeContent.brands && getHomeContent.brands.items'
        class='home-favourite'
        :style='`order: ${getHomeContent.brands.positions}`'
      >
        <h2 class='default-h2'>
          {{ getHomeContent.brands.title }}
        </h2>
        <carousel
          :margin='12'
          :items='5'
          :loop='false'
          :dots='false'
          :responsive="{
            0: { items:2 },
            760: { items:4 },
            1024: { items:5 }
          }"
          :mouse-drag='getHomeContent.brands.items.length > 5'
          :pull-drag='getHomeContent.brands.items.length > 5'
          :touch-drag='getHomeContent.brands.items.length > 5'
          class='home-favourite__slider'>
          <ProductPreview
            v-for='(item, index) in getHomeContent.brands.items'
            :key='index'
            :item='item'
          />
        </carousel>
      </div>
    </main>
  </div>
</template>

<script>
import BlogPost from '@/components/views/pages/home/BlogPost'
import PostInteresting from '@/components/views/pages/home/PostInteresting'
import ProductPreview from '@/components/views/pages/home/ProductPreview'
import CategoryItem from '@/components/views/pages/home/CategoryItem'

export default {
  components: {
    BlogPost,
    PostInteresting,
    ProductPreview,
    CategoryItem,
  },
  head() {
    return {
      title: this.$route.name
    }
  },
  computed: {
    getHomeContent() {
      return this.$store.getters['content/getСontent']
    }
  }
}
</script>
