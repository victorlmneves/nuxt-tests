<template>
  <WorkItem :workList="works" />
</template>

<script>
import axios from "axios"
import WorkItem from "@/components/work/WorkItem"

export default {
  name: 'WorkList',

  components: {
    WorkItem
  },

  async fetch() {
    return axios.get(API_URL).then((res) => {
      this.$store.commit('SET_WORK_LIST', res.data.records)
    })
  },

  computed: {
    works() {
      return this.$store.state.workList
    }
  },

  // computed: {
  //   ...mapGetters({
  //     works: 'work/workList'
  //   })
  // },

  // mounted() {
  //   this.getAll();
  // },


  // methods: {
  //   ...mapActions({
  //     getAll: 'work/getAll'
  //   })
  // }
}
</script>
