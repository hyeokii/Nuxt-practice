<template>
  <div class="planListContainer">
    <div v-if="planList.payload.planInfoList.length" class="planList">
      <PlanCard
        v-for="(plan, idx) in planList.payload.planInfoList"
        :key="idx"
        :plan="plan"
      />
    </div>
    <div v-else class="planList">
      <span>진행중인 기획전이 없습니다.</span>
    </div>
    <button @click="loadMore">더보기</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    planList: Object,
  },
  computed: {
    ...mapState([
      "planList",
      "groupData",
      "planList",
      "dispGrpNo",
      "dispMediaCd",
      "pageNo",
      "pageSize",
      "sortType",
    ]),
  },
  methods: {
    ...mapActions(["fetchGroupPlan", "incrementPageNo"]),
    async loadMore() {
      // 페이지 번호 증가
      await this.$store.dispatch("incrementPageNo");
      await this.$store.dispatch(
        "fetchGroupPlan",
        this.dispGrpNo,
        this.pageNo,
        this.sortType
      );
      this.incrementPageNo();
      // 새로운 데이터 요청
      await this.fetchGroupPlan();
    },
  },
};
</script>

<style lang="scss" scoped>
.planListContainer {
  width: 1240px;

  .planList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
