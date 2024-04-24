<template>
  <section>
    <slot></slot>
  </section>
</template>
<script>
export default {
  layoute: "section",
  props: {
    type: {
      type: String,
      defaultValue: undefined,
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
