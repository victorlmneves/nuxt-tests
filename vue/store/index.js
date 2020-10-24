import Vue from "vue"
import Vuex from "vuex"

import work from "./modules/work"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    isMenuOpen: false
  },
  getters: {
    menuOpen(state) {
      return state.isMenuOpen
    }
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    }
  },
  actions: {},
  modules: {
    work
  }
})
