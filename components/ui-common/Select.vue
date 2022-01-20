<template>
  <v-select
    v-model="options[0]"
    :options="options"
    label="title"
    class="default-select"
    :searchable="false"
    :clearable="false"
    :components="{OpenIndicator}"
  >
  </v-select>
</template>

<script>
  export default {
    name: "Select",
    data() {
      return {
        options: [
          { title: "by popularity" },
          { title: "by update date" },
          { title: "by name: A-Z" },
          { title: "by name: Z-A" },
          { title: "by availability" }
        ],
        OpenIndicator: {
          render: createElement => createElement('span', {class: {'default-select__caret': true}}),
        },
      };
    }
  }
</script>

