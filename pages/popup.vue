<template>
  <div class='home container'>
    <main class='main'>
      <div class='experts-responses'>
        <h2 class='default-h2'>
          Expert responses
        </h2>
        <Slider
          class="expert-response__slider"
          :variable-width='!$device.isMobile'
          :initial-slide="$device.isMobile ? 1 : 0">
          <BlogPost
            v-for='item in 15'
            :key='item'
            :class='item === 1 ? "first-item" : ""'
            :title='item === 1 ? "Tips from puppet experts" : "New article"'
            :content='item === 1 ? "Hello, everyone. Today I want to tell you a little bit about my creative process, how to create images and collections, and share tips" : "Overview of the wizard"'
          />
        </Slider>
      </div>
      <div class='most-interesting'>
        <h2 class='default-h2'>The most interesting thing on Everigin</h2>
        <Slider :slides="5" :slides-on-tablet="4">
          <PostInteresting
            v-for='i in 20'
            :key='i'
          />
        </Slider>
      </div>
      <div class='more-interesting'>
        <eve-button>More interesting things on Everigin</eve-button>
      </div>
      <div class='tag-wrapper'>
        <tag
          v-for="(tag, index) in tags"
          :key="index"
          :href="tag.link"
        >
          {{tag.name}}</tag>
      </div>
      <div class='home-products'>
        <Slider :slides="5" :slides-on-tablet="4" :rows="$device.isMobile ? 2 : 1">
          <ProductPreview
            v-for='item in 10'
            :key='item'
            :rating='4'
            :price='12222'
          />
        </Slider>
      </div>
      <div class='home-products__actions'>
        <eve-button class="dark">
          More offers
        </eve-button>
        <eve-button icon>
          <template #icon><img src='/icons/edit.svg' alt=''></template>
          Place an ad
        </eve-button>
      </div>
      <div class='home-categories'>
        <CategoryItem
          v-for='(category, i) in categories'
          :key='i'
          to='#'
        >
          {{ category }}
        </CategoryItem>
      </div>
      <div class='home-favourite'>
        <h2 class='default-h2'>
          Favourite brands
        </h2>
        <Slider :slides="5" :slides-on-tablet="4" :rows="$device.isMobile ? 3 : 1">
          <ProductPreview
            v-for='item in 10'
            :key='item'
            :rating='4'
            :price='12222'
          />
        </Slider>
      </div>
    </main>
    <div class="backdrop"></div>
    <Popup />
  </div>
</template>
<script>
import BlogPost from '@/components/views/pages/home/BlogPost'
import PostInteresting from '@/components/views/pages/home/PostInteresting'
import ProductPreview from '@/components/views/pages/home/ProductPreview'
import CategoryItem from '@/components/views/pages/home/CategoryItem'
import Popup from '@/components/ui-common/Popup';

export default {
  components: {
    BlogPost,
    PostInteresting,
    ProductPreview,
    CategoryItem,
    Popup
  },
  data () {
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
      categories: ['Dolls', 'Brands', 'Experts', 'Author\'s dolls', 'Video']
    }
  },
  head() {
    return {
      title: this.$route.name
    }
  }
}
</script>
