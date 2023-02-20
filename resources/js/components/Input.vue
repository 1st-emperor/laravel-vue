<template>
  <input
    type="text"
    :class="className"
    :value="modelValue"
    v-bind="$attrs"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    className: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>