<template>
  <h2 class="section-title">{{ secTitle }}</h2>
</template>
<script>
export default {
  layoute: "sectionTitle",
  props: {
    secTitle: {
      type: String,
      defaultValue: undefined,
    },
  },
};
</script>
<style lang="scss" scoped>
.section-title {
  font-size: 30px;
  font-weight: 700;
  .box-slide.type-card & {
    margin:0 -30px;
  }
}
</style>
