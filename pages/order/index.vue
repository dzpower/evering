<template>
  <div class="order-page container">
    <main class="main">
      <h2 class="default-h2">Оформление заказа</h2>
      <form class="order-form">
        <strong>Выберите вариант доставки</strong>
        {{ checkout.delivery }}
        <div class="order-form__radios">
          <label class="order-form-radio">
            <Checkbox
              name="delivery"
              value="Курьер по Перьми"
              type="radio"
              @change='checkout.delivery = $event' />
            Курьерская доставка по Перми
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="delivery"
              value="Почта России"
              type="radio"
              @change='checkout.delivery = $event' />
            Доставка через Почту России <br> (в среднем 4-10 дней)
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="delivery"
              value="Экспресс-доставки EMS"
              type="radio"
              @change='checkout.delivery = $event' />
            Доставка через службу экспресс-доставки EMS <br>
            (в среднем 3-7 дней)
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="delivery"
              value="В другой город"
              type="radio"
              @change='checkout.delivery = $event' />
            Доставка в другой город
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="delivery"
              value="Самовывоз в Вашем городе"
              type="radio"
              @change='checkout.delivery = $event' />
            Доставка в пункт самовывоза в вашем городе <br> (в течение 6 дней)
          </label>
          <div
            v-if='city.show'
            style='margin-left: 32px;'
          >
            <label
              v-for='(item, index) in city.items'
              :key='index'
              class="order-form-radio">
              <Checkbox
                name="city"
                type='radio'
                :value="item"
                @change='checkout.city = $event' />
              {{ item }}
            </label>
          </div>
        </div>
        <div class="order-form__buttons">
          <eve-button v-if='checkout.delivery === "Самовывоз в Вашем городе"' @onclick='city.show = true'>Выбрать из списка</eve-button>
          <eve-button v-if="false">Выбрать на карте</eve-button>
        </div>

        <strong>Выберите вариант оплаты</strong>
        <div class="order-form__radios">
          <label class="order-form-radio">
            <Checkbox
              name="payment"
              value="Оплата наличными при получении товара"
              type="radio"
              @change='checkout.payment = $event' />
            Оплата наличными при получении товара
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="payment"
              value="Оплата банковской картой в точке самовывоза"
              type="radio"
              @change='checkout.payment = $event' />
            Оплата банковской картой в точке самовывоза
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="payment"
              value="Оплата онлайн"
              type="radio"
              @change='checkout.payment = $event' />
            Оплата онлайн
          </label>
          <label class="order-form-radio">
            <Checkbox
              name="payment"
              value="Безналичный расчёт (на р/с организации)"
              type="radio"
              @change='checkout.payment = $event' />
            Безналичный расчёт (на р/с организации)
          </label>
        </div>
        <span class="price-string">
          Стоимость заказа: <strong>8500р</strong>
        </span>
        <span class="price-string">
          Стоимость доставки: <strong>500р</strong>
        </span>
        <div class="order-form__promocode">
          <input v-model='checkout.promo' type="text" class="input-default" placeholder="Промокод">
          <eve-button>
            <img src="/icons/plus.svg" alt="plus">
          </eve-button>
        </div>
        <span class="price-string">
          Итого стоимость: <strong>{{ getFullPrice }} p.</strong>
        </span>
        <span class="order-form__label order-form__bordered">Введите свой адрес доставки</span>
        <AdvancedInput required placeholder="E-mail" />
        <span class="order-form__label order-form__label-req">Страна</span>
        <EveSelect></EveSelect>
        <AdvancedInput required placeholder="ФИО" />
        <AdvancedInput required placeholder="Улица и номер дома" />
        <AdvancedInput placeholder="Квартира/апартаменты/другое" />
        <AdvancedInput required placeholder="Город" />
        <AdvancedInput required placeholder="Почтовый индекс" />
        <AdvancedInput required placeholder="Штат" />
<!--        <div class="order-form__radios order-form__agree">-->
<!--          <label class="order-form-radio">-->
<!--            <Checkbox :value="false" type="radio" />-->
<!--            <span>-->
<!--              Нажимая кнопку “Заказать”, я подтверждаю свою дееспособность, даю согласие на обработку моих персональных-->
<!--              данных. <a href="#">Подробнее</a>-->
<!--            </span>-->
<!--          </label>-->
<!--        </div>-->
        <eve-button class="order-form__submit dark">Заказать</eve-button>
        <p class="default-text">
          При отправке заказа наложенным платежом Почта России взимает 4% от оценочной стоимости заказа (эти 4% включены в
          расчетную
          стоимость доставки).
          Кроме этих 4%, Почта России взимает комиссию в размере 2% (но не менее 50 рублей)
          при получении заказа, отправленного наложенным
          платежом (за денежный перевод оплаты заказа), данные
          по состоянию на 15.05.2016.
          Таким образом, при отправке заказа по предоплате, Ваша выгода составляет до 6%
          от стоимости заказа. Убедитесь в этом сами - просто
          измените сумму аванса при доставке Почтой или EMS и вы увидите,
          как сильно изменяется Стоимость доставки.
        </p>
      </form>
    </main>
  </div>
</template>

<script>

import Checkbox from '@/components/ui-common/Checkbox';
import EveButton from '@/components/ui-common/EveButton';
import AdvancedInput from '@/components/ui-common/AdvancedInput';
import EveSelect from '@/components/ui-common/EveSelect';

export default {
  components: {EveSelect, EveButton, Checkbox, AdvancedInput},
  data: () => {
    return {
      city: {
        selectedCity: '',
        items: ['Moscov', 'Piter', 'Voronej'],
        show: false
      },
      checkout: {
        delivery: '',
        payment: '',
        city: '',
        promo: '',
        email: '',
        country: '',
        full_name: '',
        street: '',
        home: '',
        post_index: '',
        state: ''
      }
    }
  },
  computed: {
    getFullPrice() {
      let price = 0
      for (const prop of this.$store.getters['basket/getItemsInBasket']) {
        price = price + prop.price
      }
      return price
    }
  }
}
</script>
