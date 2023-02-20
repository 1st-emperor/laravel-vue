<template>
  <div class="card my-3 mx-3 border-0">
    <div style="margin-bottom: 30px">
      <div class="mb-2">
        <label class="btn-chevron" for="collapse">Cost Detail</label>
        <button
          class="btn btn-transparant border-0"
          type="button"
          :data-bs-toggle="visible ? 'collapse show' : 'collapse'"
          data-bs-target="#collapse"
          :aria-expanded="visible ? true : false"
          aria-controls="collapse"
          @click="onCollapse()"
        >
          <i
            class="btn-chevron"
            :data-feather="visible ? 'chevron-down' : 'chevron-right'"
          ></i>
        </button>
      </div>
      <div :class="visible ? 'collapse show' : 'collapse'" id="collapse">
        <table class="table table-sm table-bordered">
          <thead class="table-light">
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>UOM</th>
              <th>Unit Price</th>
              <th>Discount(%)</th>
              <th>VAT(%)</th>
              <th></th>
              <th>Currency</th>
              <th>VAT Amount</th>
              <th>Sub Total</th>
              <th>Total</th>
              <th>Charge To</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="model.list != null">
            <template v-for="(item, index) in model.list">
              <!--TR 1-->
              <tr :key="'tr1_' + index">
                <td>
                  <input
                    type="text"
                    class="form-control bg-light"
                    v-model="model.list[index].description"
                    placeholder="Description"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control bg-light w-text"
                    v-model="model.list[index].quantity"
                    placeholder="Qty"
                  />
                </td>
                <td>
                  <select
                    class="form-select bg-light w-select"
                    aria-label=".form-select-sm"
                    v-model="model.list[index].uom"
                  >
                    <option
                      v-for="(uom, index) in listUom"
                      :key="index"
                      :value="uom.value"
                    >
                      {{ uom.name }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control bg-light w-text"
                    v-model="model.list[index].price"
                    placeholder="Unit Price"
                  />
                </td>
                <td>
                  <input
                    class="form-control bg-light w-number"
                    type="text"
                    v-model="model.list[index].discount"
                    placeholder="0.00"
                  />
                </td>
                <td>
                  <input
                    class="form-control bg-light w-number"
                    type="text"
                    v-model="model.list[index].vat"
                    placeholder="0.00"
                  />
                </td>
                <td class="d-flex justify-content-center align-items-center">
                  <div>
                    <i class="text-secondary" data-feather="arrow-right"></i>
                  </div>
                </td>
                <td>
                  <select
                    class="form-select bg-light w-select"
                    aria-label=".form-select-sm"
                    v-model="model.list[index].currency"
                  >
                    <option
                      v-for="(currency, index) in listCurrency"
                      :key="index"
                      :value="currency.value"
                    >
                      {{ currency.name }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    class="form-control w-number border-0"
                    type="text"
                    v-model="model.list[index].vatAmount"
                    placeholder="0.00"
                  />
                </td>
                <td>
                  <input
                    class="form-control w-number border-0"
                    type="text"
                    v-model="model.list[index].subTotal"
                    placeholder="0.00"
                  />
                </td>
                <td>
                  <input
                    class="form-control w-number border-0"
                    type="text"
                    v-model="model.list[index].total"
                    placeholder="0.00"
                  />
                </td>
                <td>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm"
                    v-model="model.list[index].chargeTo"
                  >
                    <option value="null" selected>Select an option</option>
                    <option
                      v-for="(currency, index) in listCurrency"
                      :key="index"
                      :value="currency.value"
                    >
                      {{ currency.name }}
                    </option>
                  </select>
                </td>
                <td class="d-flex justify-content-center align-items-center">
                  <button
                    class="btn btn-grey btn-sm"
                    @click="removeCost(index)"
                  >
                    <i data-feather="minus"></i>
                  </button>
                </td>
              </tr>
            </template>

            <!--TR 3-->
            <tr class="border-bottom-0">
              <td colspan="7">
                <div class="d-flex justify-content-baseline align-items-center">
                  <label for="exRate">Exchange Rate 1 USD=</label>
                  <input
                    type="text"
                    class="form-control bg-light w-text"
                    v-model="model.exRate"
                    placeholder="0.00"
                  />
                  AED
                </div>
              </td>
              <td class="bg-disabled border-0">
                <div
                  class="d-flex justify-content-center align-items-center mt-1"
                >
                  <label for="aed" class="font-weight-bold">AED in Total</label>
                </div>
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.vatAmount"
                  placeholder="0.00"
                />
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.subTotal"
                  placeholder="0.00"
                />
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.total"
                  placeholder="0.00"
                />
              </td>
              <td colspan="2">
                <div class="d-flex justify-content-end align-items-center">
                  <button class="btn btn-plus btn-sm" @click="addCost">
                    <i data-feather="plus"></i>
                  </button>
                </div>
              </td>
            </tr>

            <!--TR 4-->
            <tr class="border-top-0">
              <td colspan="7"></td>
              <td class="bg-disabled border-0">
                <div
                  class="d-flex justify-content-center align-items-center mt-1"
                >
                  <label for="usd" class="font-weight-bold">USD in Total</label>
                </div>
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.vatAmount"
                  placeholder="0.00"
                />
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.subTotal"
                  placeholder="0.00"
                />
              </td>
              <td class="bg-disabled border-0">
                <input
                  type="text"
                  class="form-control w-number border-0"
                  disabled
                  v-model="model.total"
                  placeholder="0.00"
                />
              </td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from "../components/Input.vue";
export default {
  props: ["model"],
  components: { VInput },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    this.$store.dispatch("get_currency");
    this.$store.dispatch("get_uom");

    [0, 0].forEach((r) => this.addCost());
  },
  computed: {
    listCurrency() {
      return this.$store.getters.listCurrency;
    },
    listUom() {
      return this.$store.getters.listUom;
    },
  },
  methods: {
    onCollapse() {
      this.visible = !this.visible;
    },
    addCost: function () {
      if (this.model.list == null) this.model.list = [];

      this.model.list.push({
        exRate: 3.6725,
        description: "",
        quantity: "",
        uom: "shp",
        price: "",
        discount: 0,
        vat: 0,
        currency: "usd",
        vatAmount: "0.00",
        subTotal: "0.00",
        total: "0.00",
        chargeTo: null,
      });
    },
    removeCost: function (i) {
      this.model.list.splice(i, 1);
    },
  },
};
</script>

<style>
th {
  font-weight: 500;
}

.btn-grey {
  background-color: #cecece;
}

.bg-disabled {
  background-color: #e9ecef !important;
}

.w-number {
  width: 80px;
}

.w-text {
  width: 120px;
}

.w-select {
  width: 100px;
}

.btn-plus {
  background-color: rgb(9, 196, 190);
  color: white;
}

.btn-chevron {
  color: rgb(9, 196, 190);
}
</style>