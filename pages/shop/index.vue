<template>
  <div class="flex">
    <div class="mainContainer">
      <MainSlide />
      <Menu />
      <MdPick />
      <Brand />
      <Tab />
      <ItemCard />
    </div>
  </div>
</template>
<script>
import MdPick from "../../components/MdPick.vue";
export default {
  components: { MdPick },
  computed: {},
  async created() {
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
