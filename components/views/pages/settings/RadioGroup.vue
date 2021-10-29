<template>
  <div class="radio-group">
    <span class="radio-group__name">Photo albums</span>
    <Bar class="radio-group__buttons">
      <template #icon>
        <span class="radio-group__answer">Limited</span>
      </template>
      <div class="radio-group__button">
        <Checkbox type="radio" />
        Disabled
      </div>
      <div class="radio-group__button">
        <Checkbox type="radio" />
        Open
      </div>
      <div class="radio-group__button">
        <Checkbox type="radio" />
        Limited
      </div>
    </Bar>
  </div>
</template>

<script>

import Checkbox from '@/components/ui-common/Checkbox';
import Bar from '@/components/ui-common/Bar';
export default {
  name: "RadioGroup",
  components: {Bar, Checkbox}
}
</script>
