<template>
  <div class="planListContainer" v-if="planList">
    <div class="planList" v-if="planList.length !== 0">
      <PlanCard v-for="(plan, idx) in planList" :key="`${idx}`" :plan="plan" />
    </div>
    <div v-else>진행중인 기획전이 없습니다.</div>
    <div class="moreBtnContainer">
      <button @click="loadMore" class="moreBtn">기획전 더보기</button>
    </div>
  </div>
</template>

<script>
import apiData from "../api/apiData";
export default {
  props: {
    planList: { type: Array, required: true },
  },

  computed: {
    curPageNo() {
      return this.$router.currentRoute.query.pageNo || 1;
    },
  },

  methods: {
    async loadMore() {
      let query = this.$router.currentRoute.query;
      this.$router.push({
        path: "/plan",
        query: {
          sortType: localStorage.getItem("sortType") || "recent",
          pageNo: Number(this.curPageNo) + 1,
          dispGrpNo:
            query.dispGrpNo === null || query.dispGrpNo === undefined
              ? ""
              : query.dispGrpNo,
        },
      });

      try {
        const responseData = await apiData.fetchGroupPlan(
          query.sortType ? query.sortType : "recent",
          Number(this.curPageNo) + 1,
          query.dispGrpNo === null || query.dispGrpNo === undefined
            ? ""
            : query.dispGrpNo
        );
        this.$emit("addPlanList", responseData.data);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.planListContainer {
  width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .planList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 1240px;
  }
}

.moreBtn {
  padding: 1rem 5rem;
  width: 300px;
  border: 1px solid rgb(143, 143, 143);
  font-size: 12px;
}
</style>
