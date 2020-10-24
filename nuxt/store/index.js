import work from "./modules/work"

export const state = () => ({
  status: "",
  isMenuOpen: false,
  workList: []
})

export const getters = {
  menuOpen(state) {
    return state.isMenuOpen
  }
}

export const mutations = {
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  SET_WORK_LIST(state, works) {
    state.workList = works
  },
  // SET_WORK_ITEM(state, work) {
  //   state.work = work
  // }
}

export const actions = {
}

export const modules = {
  work
}
