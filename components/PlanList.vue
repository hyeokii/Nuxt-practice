<template>
  <div class="plan-wrapper">
    <div v-if="totalCount" class="plan-list">
      <PlanCard
        class="plan-product"
        v-for="plan in planList.payload.planInfoList"
        :plan="plan"
        :key="plan.mkdpNo"
      >
      </PlanCard>
      <button
        v-if="!(showPlan === totalCount)"
        class="plan-more"
        @click="getMoreList"
      >
        기획전 더 보기
      </button>
    </div>
    <div v-else class="plan-no">해당 기획전이 없습니다.</div>
  </div>
</template>

<script>
import PlanCard from "./PlanCard.vue";
import { getPlanList, addPlanList } from "../api";
export default {
  components: {
    PlanCard,
  },
  data() {
    return {
      planList: {},
    };
  },
  computed: {
    dispGrpNo() {
      return this.$route.query.group;
    },
    sortOption() {
      return this.$route.query.sortOption;
    },
    totalCount() {
      return this.planList?.payload?.totalCount;
    },
    showPlan() {
      return this.planList?.payload?.planInfoList
        ? this.planList.payload.planInfoList.length
        : 0;
    },
  },
  watch: {
    "$route.query.group"(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchPlans();
      }
    },
    "$route.query.sortOption"(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchPlans();
      }
    },
  },
  async fetch() {
    this.planList = await getPlanList({
      dispGrpNo: this.dispGrpNo,
      sortOption: this.sortOption,
      pageNo: this.$route.query.pageNo,
    });
  },
  methods: {
    async fetchPlans() {
      this.planList = await getPlanList({
        dispGrpNo: this.dispGrpNo,
        sortOption: this.sortOption,
        pageNo: this.$route.query.pageNo,
      });
    },

    async getMoreList() {
      let pageNo = 1;
      if (this.$route.query.pageNo) {
        pageNo = this.$route.query.pageNo;
      } else {
        pageNo = 1;
        this.$router.push({
          path: "/plan",
          query: { ...this.$route.query, pageNo },
        });
      }
      const addList = await addPlanList({
        pageNo: pageNo,
        dispGrpNo: this.dispGrpNo,
        sortOption: this.sortOption,
      });

      this.$router.push({
        path: "/plan",
        query: {
          ...this.$route.query,
          pageNo: Number(this.$route.query.pageNo) + 1,
        },
      });
      this.planList.payload.planInfoList = [
        ...this.planList.payload.planInfoList,
        ...addList,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-wrapper {
  margin: 60px auto;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .plan-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    .plan-product {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      padding: 10px;
    }
    .plan-more {
      width: 384px;
      height: 40px;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid gray;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .plan-no {
    font-size: 30px;
    font-weight: bold;
  }
}

@media ($desktop) {
  .plan-wrapper {
    width: 1280px;
  }
}
</style>
