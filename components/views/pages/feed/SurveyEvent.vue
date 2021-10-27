<template>
  <div class="survey-event news-item">
    <NewsHead/>

    <div class="survey">

      <div class="survey__title">Какой вариант нравится больше?</div>
      <div class="survey__type">Публичный опрос</div>

      <form class="survey__form">

        <RadioButton
          v-for="i in 4"
          :key="i"
          name="color"
        />

      </form>

      <eve-button v-if="$device.isDesktopOrTablet" class="dark survey__submit">Vote</eve-button>

    </div>

    <ActionBar like-button comment-count/>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import EveButton from '@/components/ui-common/EveButton';
import RadioButton from '@/components/ui-common/RadioButton';
import ActionBar from '@/components/ui-common/ActionBar';
export default {
  name: "SurveyEvent",
  components: {ActionBar, RadioButton, EveButton, NewsHead}
}
</script>
