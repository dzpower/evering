import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'


const components = { VueSlickCarousel }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
