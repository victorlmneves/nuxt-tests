export default {
  namespaced: true,
  state: {
    workTypes: [],
    workList: [],
    workDetail: {},
  },

  getters: {
    workList: (state) => {
      const workList = state.workList

      return workList
    },
    workDetail: (state) => {
      const workDetail = state.workDetail

      return workDetail
    },
  },

  mutations: {
    SET_WORK_LIST(state, works) {
      state.workList = works
    },
    SET_WORK_ITEM(state, work) {
      const workItem = { ...work[0] }
      const allImages = workItem.images.split(",")
      workItem.images = allImages
      state.workDetail = workItem
    },
  },

  actions: {
    getAll({ commit }) {
      return this.$http
        .get("works/read.php")
        .then((response) => {
          const { data } = response
          const { records } = data
          commit("SET_WORK_LIST", records)
        })
        .catch((error) => {
          throw error
        })
    },
    getById({ commit }, id) {
      return this.$http
        .get(`work/read.php?id=${id}`)
        .then((response) => {
          const { data } = response
          const { records } = data
          const detail = { ...records }
          commit("SET_WORK_ITEM", detail)
        })
        .catch((error) => {
          throw error
        })
    },
  },
}
