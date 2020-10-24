<template>
  <WorkItem :workList="works" />
</template>

<script>
import { mapActions, mapGetters } from "vuex"

import WorkItem from "@/components/work/WorkItem"

export default {
  name: 'WorkList',

  components: {
    WorkItem
  },

  computed: {
    ...mapGetters({
      works: 'work/workList'
    })
  },

  mounted() {
    this.getAll();
  },

  methods: {
    ...mapActions({
      getAll: 'work/getAll'
    })
  }
}
</script>
