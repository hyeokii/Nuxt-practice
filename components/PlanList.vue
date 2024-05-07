<template>
  <div class="planListContainer">
    <div class="planList" v-if="planList.payload.planInfoList.length > 0">
      <PlanCard
        v-for="(plan, idx) in planList.payload.planInfoList"
        :key="`${idx}${plan.mkdpNo}`"
        :plan="plan"
      />
    </div>
    <div v-else>진행중인 기획전이 없습니다.</div>
    <div v-if="shouldShowMoreButton" class="moreBtnContainer">
      <button @click="loadMore" class="moreBtn">기획전 더보기</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState([
      "planList",
      "dispGrpNo",
      "dispMediaCd",
      "pageNo",
      "pageSize",
      "sortType",
    ]),
    displayedPlanList() {
      // 화면에 표시할 데이터는 최대 9개로 제한
      return this.planList.payload.planInfoList.slice(0, 9);
    },
    shouldShowMoreButton() {
      // 전체 데이터 개수가 화면에 표시된 데이터 개수보다 많은 경우에만 버튼 표시
      return this.planList.payload.planInfoList.length > 9;
    },
  },
  methods: {
    ...mapActions(["fetchGroupPlan", "incrementPageNo"]),
    async loadMore() {
      // 페이지 번호 증가
      this.incrementPageNo();
      // 새로운 데이터 요청
      await this.$store.dispatch("fetchGroupPlan", {
        pgNo: this.pageNo,
        grpNo: this.dispGrpNo,
        sort: this.sortType,
      });
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
