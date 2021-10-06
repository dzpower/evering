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

      <eve-button class="dark survey__submit">Vote</eve-button>

    </div>

    <!-- Action Bar -->
    <div class="action-bar action-bar--full">
      <div class="action-bar__likes">
        <button>
          <img src="/icons/like-active.svg" alt="like">
        </button>
        <span>5345</span>
      </div>
      <eve-button icon>
        Like
        <template #icon>
          <img src="/icons/like.svg" alt="like">
        </template>
      </eve-button>
      <div class="action-bar__comments-count">
        <img src="/icons/comments.svg" alt="like">
        176 comments
      </div>
      <button class="action-bar__comments">
        COMMENTS
        <img src="/icons/plus.svg" alt="plus">
      </button>
    </div>
  </div>
</template>

<script>

import NewsHead from '@/components/views/pages/feed/news/NewsHead';
import EveButton from '@/components/ui-common/EveButton';
import RadioButton from '@/components/ui-common/RadioButton';
export default {
  name: "SurveyEvent",
  components: {RadioButton, EveButton, NewsHead}
}
</script>
