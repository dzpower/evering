<template>
  <div class="order-page container">
    <main class="main">
      <h2 class="default-h2">Оформление заказа</h2>
      <form class="order-form">
        <strong>Выберите вариант доставки</strong>
        <div class="order-form__radios">
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Курьерская доставка по Перми
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Доставка через Почту России <br> (в среднем 4-10 дней)
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Доставка через службу экспресс-доставки EMS <br>
            (в среднем 3-7 дней)
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Доставка в другой город
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Доставка в пункт самовывоза в вашем городе <br> (в течение 6 дней)
          </label>
        </div>
        <div class="order-form__buttons">
          <eve-button>Выбрать из списка</eve-button>
          <eve-button>Выбрать на карте</eve-button>
        </div>
        <strong>Выберите вариант оплаты</strong>
        <div class="order-form__radios">
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Оплата наличными при получении товара
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Оплата банковской картой в точке самовывоза
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            Оплата онлайн
          </label>
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
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
          <input type="text" class="input-default" placeholder="Промокод">
          <eve-button>
            <img src="/icons/plus.svg" alt="plus">
          </eve-button>
        </div>
        <span class="price-string">
          Итого стоимость: <strong>9000р</strong>
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
        <div class="order-form__radios order-form__agree">
          <label class="order-form-radio">
            <Checkbox :value="false" type="radio" />
            <span>
              Нажимая кнопку “Заказать”, я подтверждаю свою дееспособность, даю согласие на обработку моих персональных
              данных. <a href="#">Подробнее</a>
            </span>
          </label>
        </div>
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
}
</script>
