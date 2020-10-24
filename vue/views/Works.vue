<template>
  <span>
    <WorkList />
    <FooterNewsletter />
  </span>
</template>

<script>
import WorkList from "@/components/work/WorkList"
import FooterNewsletter from "@/components/footer/FooterNewsletter"

export default {
  components: {
    WorkList,
    FooterNewsletter
  }
}
</script>
