<template>
  <div class="planDetailContainer">
    <div class="planTitle">기획전</div>
    <div
      class="titleImg"
      v-html="planData.titleHtmlPc"
      v-if="planData.titleHtmlPc"
    ></div>
  </div>
</template>

<script>
import apiData from "../../api/apiData";
export default {
  data() {
    return {
      planData: [],
    };
  },
  async asyncData({ route }) {
    const params = route.params;
    const planData = await apiData.fetchPlanDetail(params.id);

    //PlanList 데이터
    return {
      planData: planData.data,
    };
  },
};
</script>

<style lang="scss" scoped>
.planDetailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.planTitle {
  font-size: 32px;
}

.titleImg p {
  margin: 0;
}
</style>
