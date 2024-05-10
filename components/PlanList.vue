<template>
  <div class="planListContainer" v-if="planList">
    <div class="planList" v-if="planList.length !== 0">
      <PlanCard
        v-for="(plan, idx) in planList"
        :key="`${idx}${plan.mkdpNo}`"
        :plan="plan"
      />
    </div>
    <div v-else>진행중인 기획전이 없습니다.</div>
    <div class="moreBtnContainer">
      <button @click="loadMore" class="moreBtn" v-show="showMoreBtn">
        기획전 더보기
      </button>
    </div>
  </div>
</template>

<script>
import apiData from "../api/apiData";
export default {
  props: {
    planList: { type: Array, required: true },
    totalCount: { type: Number, requiredt: true },
    sortType: { type: String, required: true },
  },

  computed: {
    curPageNo() {
      return this.$router.currentRoute.query.pageNo || 1;
    },

    showMoreBtn() {
      const query = this.$router.currentRoute.query;
      return this.totalCount >= Number(query.pageNo || 1) * 9;
    },
  },

  methods: {
    async loadMore() {
      // 상위로 이벤트를 보낸 다음에 처리
      let query = this.$router.currentRoute.query;
      this.$router.push({
        path: "/plan",
        query: {
          sortType: this.sortType,
          pageNo: Number(this.curPageNo) + 1,
          dispGrpNo:
            query.dispGrpNo === null || query.dispGrpNo === undefined
              ? ""
              : query.dispGrpNo,
        },
      });

      this.$emit("addPlanList", Number(this.curPageNo));
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
