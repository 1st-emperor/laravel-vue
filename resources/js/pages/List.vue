<template>
  <div>
    <CostDetail :model="model" />
    <div class="mx-3 my-4 d-flex justify-content-end">
      <v-button
        class="btn-transparant border-0"
        background="none"
        :gray="true"
        label="Cancel"
        :click="onClear"
      ></v-button>
      <v-button
        class="btn-draft"
        :gray="true"
        label="Save as Draft"
        :click="onDraft"
      ></v-button>
      <v-button class="btn-submit" label="Submit" :click="onSubmit"></v-button>
    </div>
  </div>
</template>

<script>
import CostDetail from "./CostDetail.vue";
import VButton from "../components/Button.vue";
export default {
  name: "list",
  components: { CostDetail, VButton },
  data() {
    return {
      model: {
        list: null,
      },
    };
  },
  methods: {
    onClear(event) {
      event.preventDefault();
      console.log(this.model, "clear");
    },
    onDraft(event) {
      event.preventDefault();
      console.log(this.model, "draft");
    },
    onSubmit(event) {
      event.preventDefault();
      console.log(this.model, "model");

      alert("Success!");
    },
  },
};
</script>

<style>
.btn-draft {
  background-color: white;
  border: 1px solid grey;
  padding: 1rem 2rem;
  margin: 0px 30px;
}

.btn-submit {
  background-color: rgb(9, 196, 190);
  color: white;
  padding: 1rem 2rem;
}
</style>