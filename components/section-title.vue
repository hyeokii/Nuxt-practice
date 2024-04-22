<template>
  <h2 class="section-title">{{ secTitle }}</h2>
</template>
<script>
export default {
  layoute: "sectionTitle",
  props: {
    secTitle: {
      type: Object,
      defaultValue: undefined,
    },
  },
};
</script>
<style lang="scss" scoped>
.section-title {
  font-size: 30px;
  font-weight: 700;
}
</style>
