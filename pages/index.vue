<template>
  <div class='home container'>
    <main class='main'>
      <div class='experts-responses'>
        <h2 class='default-h2'>
          Expert responses
        </h2>
        <VueSlickCarousel :variable-width='true' :arrows='true'>
          <ExpertResponse
            v-for='item in 15'
            :key='item'
            :class='item === 1 ? "first-item" : ""'
            :title='item === 1 ? "Tips from puppet experts" : "New article"'
            :content='item === 1 ? "Hello, everyone. Today I want to tell you a little bit about my creative process, how to create images and collections, and share tips" : "Overview of the wizard"'
          />
          <template #prevArrow>
            <div class='custom-arrow'>
            </div>
          </template>
          <template #nextArrow>
            <div class='custom-arrow custom-arrow__next'>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
      <div class='most-interesting'>
        <h2 class='default-h2'>The most interesting thing on Everigin</h2>
        <VueSlickCarousel :variable-width='true' :arrows='true'>
          <PostInteresting
            v-for='i in 10'
            :key='i'
          />
          <template #prevArrow>
            <div class='custom-arrow'>
            </div>
          </template>
          <template #nextArrow>
            <div class='custom-arrow custom-arrow__next'>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
      <div class='more-interesting'>
        <EveButton>More interesting things on Everigin</EveButton>
      </div>
      <div class='tag-wrapper'>
        <Tag
          v-for="(tag, index) in tags"
          :key="index"
          :href="tag.link"
        >
          {{tag.name}}</Tag>
      </div>
      <div class='home-products'>
        <VueSlickCarousel :variable-width='true' :arrows='true'>
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
        </VueSlickCarousel>
      </div>
      <div class='home-products__actions'>
        <EveButton>
          More offers
        </EveButton>
        <EveButton icon>
          <template #icon><img src='/icons/edit.svg' alt=''></template>
          Place an ad
        </EveButton>
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
        <VueSlickCarousel :variable-width='true' :arrows='true'>
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
        </VueSlickCarousel>
      </div>
    </main>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ExpertResponse from '@/components/views/pages/home/ExpertResponse'
import PostInteresting from '@/components/views/pages/home/PostInteresting'
import EveButton from '@/components/ui-common/EveButton'
import Tag from '@/components/ui-common/Tag'
import ProductPreview from '@/components/views/pages/home/ProductPreview'
import CategoryItem from '@/components/views/pages/home/CategoryItem'

export default {
  components: {
    EveButton,
    VueSlickCarousel,
    ExpertResponse,
    PostInteresting,
    Tag,
    ProductPreview,
    CategoryItem
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
