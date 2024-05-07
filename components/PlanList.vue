<template>
  <div class="planListContainer">
    <div class="planList" v-if="planList.length > 0">
      <PlanCard
        v-for="(plan, idx) in planList"
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

    shouldShowMoreButton() {
      return this.planList.length >= this.pageSize;
    },
  },
  methods: {
    ...mapActions([
      "fetchGroupPlan",
      "setNewGrpNo",
      "setSortType",
      "incrementPageNo",
    ]),
    async loadMore() {
      this.incrementPageNo();

      this.$router.push({
        path: "/plan",
        query: {
          dispMediaCd: this.dispMediaCd,
          pageNo: this.pageNo,
          pageSize: "9",
          // brandNo: this.brandNo,
          dispGrpNo: this.newGrpNo,
        },
      });

      await this.fetchGroupPlan({
        grpNo: this.dispGrpNo,
        pgNo: this.pageNo,
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
