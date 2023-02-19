<template>
  <div>
    <CostDetail />
    <div class="mx-3 my-4 d-flex justify-content-end">
      <button class="btn btn-transparant">Cancel</button>
      <button class="btn btn-draft">Save as Draft</button>
      <button class="btn btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import CostDetail from "./CostDetail.vue";
export default {
  components: { CostDetail },
  name: "list",
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