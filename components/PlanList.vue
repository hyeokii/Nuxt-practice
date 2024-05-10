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
  },

  computed: {
    curPageNo() {
      return this.$router.currentRoute.query.pageNo || 1;
    },

    showMoreBtn() {
      const query = this.$router.currentRoute.query;
      // const, let 혼용해서 쓰지 말자.
      // if (this.planList.length === Number(query.pageNo) * 9) {
      //   const res = apiData.fetchGroupPlan(
      //     query.sortType ? query.sortType : "recent",
      //     Number(query.pageNo) + 1,
      //     query.dispGrpNo === null || query.dispGrpNo === undefined
      //       ? ""
      //       : query.dispGrpNo
      //   );
      //   return res.data.payload.planInfoList.length !== 0;
      // }
      // totalCount 받아와서 계산 => api 리턴값에 있음.
      return this.planList.length >= Number(query.pageNo) * 9;
    },
  },

  methods: {
    async loadMore() {
      // 상위로 이벤트를 보낸 다음에 처리
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
        // api를 요청하는 부분이 너무 여러곳.
        // 기획전 더보기 버튼 누르면 실행.
        // 데이터가 있는 곳에서 바꿔주는 게 좋음.
      } catch (error) {
        console.error("error", error);
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
