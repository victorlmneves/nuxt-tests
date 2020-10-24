export default {
  state: {
    workTypes: [],
    workList: [],
    workDetail: {}
  },

  // getters: {
  //   workList: state => {
  //     const workList = state.workList

  //     return workList
  //   }
  // },

  mutations: {
    SET_WORK_LIST(state, works) {
      state.workList = works;
    },
    SET_WORK_ITEM(state, work) {
      state.work = work;
    }
  },

  actions: {
    // async getAll({ commit }) {
    //   const data = await this.$axios.$get('works/read.php')
    //   const { records } = data;
    //   commit('SET_WORK_LIST', records)
    // },
    getById({ commit }, id) {
      return this.$http
        .get(`work/read.php?id=${id}`)
        .then(response => {
          const { data } = response;
          const { records } = data;
          const detail = { ...records };
          commit("SET_WORK_ITEM", detail);
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
