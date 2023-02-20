import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listCurrency: [],
        listUom: [],
        listChargeTo: [],
    },
    getters: {
        listCurrency: (state) => state.listCurrency,
        listUom: (state) => state.listUom,
        listChargeTo: (state) => state.listChargeTo,
    },
    mutations: {
        set_currency: (state, payload) => {
            state.listCurrency = payload;
        },
        set_uom: (state, payload) => {
            state.listUom = payload;
        },
        set_charge: (state, payload) => {
            state.listChargeTo = payload;
        },
    },
    actions: {
        get_currency: ({ commit }) => {
            axios
                .get("http://localhost:9000/currency")
                .then((response) => {
                    commit("set_currency", response.data);
                })
                .catch((errors) => {
                    console.log(errors);
                });
        },
        get_uom: ({ commit }) => {
            axios
                .get("http://localhost:9000/uom")
                .then((response) => {
                    commit("set_uom", response.data);
                })
                .catch((errors) => {
                    console.log(errors);
                });
        },
        get_charge: ({ commit }) => {
            axios
                .get("http://localhost:9000/currency")
                .then((response) => {
                    commit("set_charge", response.data);
                })
                .catch((errors) => {
                    console.log(errors);
                });
        },
    },
});
