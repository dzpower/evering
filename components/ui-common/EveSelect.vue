<template>
  <v-select
    v-model="options[0]"
    :options="options"
    label="title"
    class="eve-select"
    :searchable="false"
    :clearable="false"
    :components="{OpenIndicator}"
  >
  </v-select>
</template>

<script>
export default {
  name: "EveSelect",
  data() {
    return {
      options: [
        { title: "Россия" },
        { title: "Беларусь" },
        { title: "Казахстан" },
        { title: "Украина" },
        { title: "Португалия" }
      ],
      OpenIndicator: {
        render: createElement => createElement('span', {class: {'eve-select__caret': true}}),
      },
    };
  }
}
</script>
