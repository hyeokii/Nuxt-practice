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
    </div>
    <div v-else class="plan-no">해당 기획전이 없습니다.</div>
    <button
      v-if="!(showPlan >= totalCount)"
      class="plan-more"
      @click="getMoreList"
    >
      기획전 더 보기
    </button>
  </div>
</template>

<script>
import PlanCard from "./PlanCard.vue";
import { getPlanList, addPlanList } from "../api";
import { EventBus } from "..";
export default {
  components: {
    PlanCard,
  },
  data() {
    return {
      planList: {},
      dispGrpNo: this.$route.query.group ?? "",
      sortOption: this.$route.query.sortOption ?? "recent",
      pageNo: this.$route.query.pageNo ?? 1,
    };
  },
  computed: {
    totalCount() {
      return this.planList?.payload?.totalCount ?? 0;
    },
    showPlan() {
      return this.planList?.payload?.planInfoList?.length ?? 0;
    },
  },
  async fetch() {
    this.planList = await getPlanList({
      dispGrpNo: this.dispGrpNo,
      sortOption: this.sortOption,
      pageNo: this.pageNo,
    });
  },

  created() {
    EventBus.$on("planList-event", (eventType, data, query) => {
      this.$router.push({
        path: this.$route.path,
        query: query,
      });
      if (eventType === "categoryId-event") {
        this.fetchPlans({ categoryId: data, pageNo: query.pageNo });
      } else if (eventType === "sort-event") {
        this.fetchPlans({ sortOption: data, pageNo: query.pageNo });
      }
    });
  }, //data 하나로

  methods: {
    async fetchPlans({
      categoryId = this.dispGrpNo,
      sortOption = this.sortOption,
      pageNo = this.pageNo,
    }) {
      this.planList = await getPlanList({
        dispGrpNo: categoryId,
        sortOption: sortOption,
        pageNo: pageNo,
      });
    },

    async getMoreList() {
      this.$router.push({
        path: "/plan",
        query: { ...this.$route.query, pageNo: this.pageNo },
      });
      const addList = await addPlanList({
        pageNo: this.pageNo,
        dispGrpNo: this.dispGrpNo,
        sortOption: this.sortOption,
      });

      this.$router.push({
        path: "/plan",
        query: {
          ...this.$route.query,
          pageNo: Number(this.pageNo) + 1,
        },
      });

      this.planList.payload.planInfoList.push(...addList);
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    row-gap: 2.5rem;
    column-gap: 1.5rem;
    font-size: 14px;
    .plan-product {
      display: flex;
      flex-direction: column;
    }
  }

  .plan-more {
    width: 384px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid gray;
  }
  .plan-no {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
