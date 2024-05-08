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
        v-if="totalCount !== showPlan"
        class="plan-more"
        @click="moreList"
      >
        기획전 더 보기
      </button>
    </div>
    <div v-else class="plan-no">해당 기획전이 없습니다.</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlanCard from "./PlanCard.vue";
export default {
  components: {
    PlanCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["planList", "totalCount", "showPlan"]),
  },
  methods: {
    async moreList() {
      await this.$store.dispatch("getMoreList");
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
