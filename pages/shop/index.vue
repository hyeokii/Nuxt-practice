<template>
  <div class="flex">
    <div class="mainContainer">
      <MainSlide />
      <Menu />
      <Brand />
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  async created() {
    // created 훅에서 비동기로 데이터를 가져오도록 합니다.
    await this.$store.dispatch("getData");
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}
.mainContainer {
  border: 1px solid green;
  width: 1200px;
  padding: 3rem 5rem;
}
</style>
