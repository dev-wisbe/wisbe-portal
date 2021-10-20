/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import authStore from "./modules/authStore";
import authentication from '@/Authentication/store'

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    authStore,
    authentication,
  },
});
