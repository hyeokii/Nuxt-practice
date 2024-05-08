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
import PlanList from "../../components/PlanList.vue";
import { getPlanGroup } from "../../api";

export default {
  name: "MainPage",
  components: {
    Category,
    Selectbox,
    PlanList,
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
  height: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
