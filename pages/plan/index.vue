<template>
  <div class="containers">
    <Category :data="res"></Category>
    <Selectbox></Selectbox>
    <PlanList></PlanList>
  </div>
</template>
<script>
import Category from "../../components/Category.vue";
import Selectbox from "../../components/Selectbox.vue";
import { getPlanGroup } from "../../api";

export default {
  name: "MainPage",
  components: {
    Category,
    Selectbox,
  },

  async asyncData() {
    const res = await getPlanGroup();
    return { res };
  },
};
</script>

<style lang="scss" scoped>
.containers {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
