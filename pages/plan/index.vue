<template>
  <div class="containers">
    <Category :data="res"></Category>
    <Selectbox
      :options="sortOptionList"
      :sortOption="sortOption"
      @select-box="selectUpdate"
    ></Selectbox>
    <PlanList></PlanList>
  </div>
</template>
<script>
import Category from "../../components/Category.vue";
import Selectbox from "../../components/Selectbox.vue";
import PlanList from "../../components/PlanList.vue";
import { getPlanGroup } from "../../api";
import { EventBus } from "../..";

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
      sortOption: this.$route.query.sortOption ?? "recent",
    };
  },
  async asyncData() {
    const res = await getPlanGroup();
    return { res };
  },

  methods: {
    selectUpdate(key) {
      const query = { ...this.$route.query };

      query.sortOption = key;
      EventBus.$emit("planList-event", "sort-event", key, query);
    },
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
