<template>
  <div class="radio-group">
    <span class="radio-group__name">Photo albums</span>
    <div class="radio-group__buttons">
      <RadioButton class="radio-group__button" />
      <RadioButton class="radio-group__button"/>
      <RadioButton class="radio-group__button"/>
    </div>
  </div>
</template>

<script>

import RadioButton from '@/components/ui-common/RadioButton';
export default {
  name: "RadioGroup",
  components: {RadioButton}
}
</script>
