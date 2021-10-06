import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import EveButton from '@/components/ui-common/EveButton'
import ActionBar from '@/components/ui-common/ActionBar'
import BreadCrumbs from '@/components/ui-common/BreadCrumbs'
import Card from '@/components/ui-common/Card'
import DefaultVideo from '@/components/ui-common/DefaultVideo'
import Discussion from '@/components/ui-common/Discussion'
import Draft from '@/components/ui-common/Draft'
import EmailSubscribe from '@/components/ui-common/EmailSubscribe'
import Event from '@/components/ui-common/Event'
import Pagination from '@/components/ui-common/Pagination'
import ProfileBar from '@/components/ui-common/ProfileBar'
import Purchase from '@/components/ui-common/Purchase'
import Rating from '@/components/ui-common/Rating'
import Reference from '@/components/ui-common/Reference'
import Review from '@/components/ui-common/Review'
import RouterTabs from '@/components/ui-common/RouterTabs'
import SearchField from '@/components/ui-common/SearchField'
import Select from '@/components/ui-common/Select'
import Tag from '@/components/ui-common/Tag'
import Checkbox from '@/components/ui-common/Checkbox'


const components = {
  VueSlickCarousel,
  EveButton,
  ActionBar,
  BreadCrumbs,
  Card,
  DefaultVideo,
  Discussion,
  Draft,
  EmailSubscribe,
  Event,
  Pagination,
  ProfileBar,
  Purchase,
  Rating,
  Reference,
  Review,
  RouterTabs,
  SearchField,
  Select,
  Tag,
  Checkbox,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
