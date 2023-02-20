<template>
  <button
    :class="[gray ? 'gray' : 'green', 'btn']"
    :style="{ background, color }"
    @click="click"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      require: true,
    },
  },
};
</script>

<style scoped>
.button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  filter: brightness(125%);
}

.gray {
  background-color: white;
  color: black;
  border: 1px solid gray;
}

.green {
  background-color: rgb(9, 196, 190);
  color: white;
  border: 1px solid gray;
}
</style>