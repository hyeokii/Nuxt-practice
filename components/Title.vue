<template>
  <div class="title">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 3rem;
  span {
    font-size: 28px;
    font-weight: 800;
    padding: 0 25px;
  }
}
</style>
