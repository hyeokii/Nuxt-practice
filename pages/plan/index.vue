<template>
  <div class="containers">
    <Category :data="res"></Category>
    <Selectbox boxtype="PlanMain" :options="sortOptionList"></Selectbox>
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

  data() {
    return {
      sortOptionList: { recent: "최신순", close: "마감순" },
    };
  },

  async asyncData() {
    const res = await getPlanGroup();
    return { res };
  },
};
</script>

<style lang="scss" scoped>
.containers {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
</style>
