<template>
  <div class='item-page brand-page prod'>
    <main class='main'>
      <div class='item-page__columns'>
        <div v-if="$device.isMobileOrTablet" class="brand-page__top-bar">
          <eve-button icon>
            <template #icon>
              <img src="/icons/edit.svg" alt="edit">
            </template>
            Edit a page
          </eve-button>
          <eve-button class="dark">
            Products in the marketplace
          </eve-button>
        </div>
        <div class="default-photo item-page__leftcol brand-page__photo">
          <img src='/content/01.png' alt='user photo'>
        </div>
        <div class='item-page__content'>
          <h2 v-if="$device.isDesktop" class='default-h2'>
            <strong>Barbie</strong>
          </h2>
          <p class='default-text'>
            It is no secret that the most favorite doll of both little girls and adult representatives of the fair sex is Barbie. She is so loved by representatives of the beautiful half of humanity that they are ready to take an example from her, adopting her style of clothing. The girl-doll has become a model of style for a huge number of young ladies. The number of clothes present in the Barbie wardrobe is very large. All little girls choose a Barbie doll for themselves, wanting to be like her when they become adults. The Barbie brand offers little princesses not to wait so long, but now to replenish their wardrobe with the outfits of their favorite Barbie.

            <br>
            <br>

            <strong>The history of the appearance of the Barbie brand (Barbie):</strong>

            <br>
            <br>

            The trademark, called Barbie, originated in 1984. This year, the company Siport decided to start manufacturing shoes with this name. A few years later, an English clothing company showed interest in the brand. Soon both companies joined together and became partners, and today the name Barbie is worn by both collections of English women's clothing and collections of Italian shoes. The Barbie trademark considers its primary task to be the creation of such excellent models that will be able to transfer Barbie fans to a fabulous atmosphere, give them outfits that match the style of their favorite.

            <br>
            <br>

            <strong>Product range and design:</strong>

            <br>
            <br>

            Today, the Barbie trademark is the most popular brand that produces clothes for children. The Barbie brand is engaged in the manufacture of things intended for girls from birth to the age of fourteen. Such products are characterized by glamor combined with simplicity, convenience and high quality characteristics.

            <br>

            Source: <a href="https://www.relook.ru/brand/Barbie.html">https://www.relook.ru/brand/Barbie.html</a>

            <br>

            <eve-button class="default-text__size-btn">
              <div class="--caret-after">Less</div>
            </eve-button>
          </p>

          <div class='brand-page__products'>
            <Slider :slides="3" :rows="$device.isMobileOrTablet ? 2 : 1">
              <card
                v-for="item in 5"
                :key="item"
                class=""
              ></card>
            </Slider>
          </div>

          <div class="brand-page__albums">
            <BrandEvent v-for="item in 3" :key="item" />
          </div>


        </div>

        <div class='item-page__rightcol'>

          <div v-if="$device.isDesktop" class="brand-page__top-bar">
            <eve-button icon>
              <template #icon>
                <img src="/icons/edit.svg" alt="edit">
              </template>
              Edit a page
            </eve-button>
            <eve-button class="dark">
              Products in the marketplace
            </eve-button>
          </div>

          <h2 class='default-h2'>Article</h2>
          <div class="brand-page__articles">
            <Article
              v-for="item in 3"
              :key="item"
            />
          </div>

          <h2 class='default-h2'>References</h2>

          <div class="brand-page__references">
            <reference
              :expert="true"
            />
            <reference
              :expert="false"
            />
          </div>

          <h2 class='default-h2'>Photo Albums</h2>
          <div class="brand-page__articles">
            <Article
              v-for="item in 3"
              :key="item"
            />
          </div>

        </div>

      </div>
    </main>
  </div>
</template>

<script>
import Article from "@/components/views/pages/brands/Article"
import BrandEvent from '@/components/views/pages/brands/BrandEvent';
import Slider from '@/components/ui-common/Slider';

export default {
  components: {
    BrandEvent,
    Article,
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
