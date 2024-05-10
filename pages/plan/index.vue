<template>
  <div class="planWrapper">
    {{ selectedGroup }}
    <ul class="categoryContainer">
      <li
        class="category"
        @click="routeToGroup('', 0)"
        :class="{ active: selectedGroup === 0 }"
      >
        전체
      </li>
      <li
        v-for="(group, idx) in categoryData"
        :key="`${idx}${group.dispGrpNo}`"
        @click="routeToGroup(group.dispGrpNo, group.dispGrpNo)"
        class="category"
        :class="{ active: selectedGroup === group.dispGrpNo }"
      >
        {{ group.dispGrpNm }}
      </li>
    </ul>
    <sortSelectBox @updatePlanList="updatePlanList" :planList="planList" />
    <PlanList :planList="planList" @addPlanList="addPlanList" />
  </div>
</template>

<script>
import apiData from "../../api/apiData";
// watch는 최대한 지양해라.
// 원본데이터는 최대한 바꾸지 마라.

export default {
  data() {
    return {
      categoryData: [],
      planList: [],
      pageNo: 1,
      selectedGroup: 0,
      //query로 저장
      sortType: "recent",
      // 자식 컴포넌트에 props로 내려서 관리(emit) => 자식 컴포넌트는 따로 선언할 필요 X
    };
  },
  async asyncData({ route }) {
    const query = route.query;
    const categoryData = await apiData.fetchGroupData();
    // 카테고리 데이터
    const totalData = await apiData.fetchPlanList(
      query.sortType ? query.sortType : "recent",
      query.pageNo ? query.pageNo : 1,
      query.dispGrpNo === null || query.dispGrpNo === undefined
        ? ""
        : query.dispGrpNo
    );

    //PlanList 데이터
    return {
      categoryData: categoryData.data,
      planList: totalData.data.payload.planInfoList,
      selectedGroup: query.selectedGrp,
    };
  },
  methods: {
    async routeToGroup(newGrpNo, groupNo) {
      // 카테고리 누르면 실행
      this.$router.push({
        path: "/plan",
        query: {
          sortType: localStorage.getItem("sortType") || "recent",
          pageNo: this.pageNo,
          dispGrpNo: newGrpNo,
          selectedGrp: groupNo,
        },
      });
      try {
        const responseData = await apiData.fetchGroupPlan(
          localStorage.getItem("sortType") || "recent",
          this.pageNo,
          newGrpNo
        );
        this.planList = responseData.data.payload.planInfoList;
      } catch (error) {
        console.error("error", error);
      }
      this.selectedGroup = groupNo;
    },

    updatePlanList(newPlanList) {
      this.planList = newPlanList;
    },
    addPlanList(morePlanList) {
      this.planList = [...this.planList, ...morePlanList.payload.planInfoList];
    },
  },
};
</script>

<style lang="scss" scoped>
.planWrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.categoryContainer {
  display: flex;
  flex-direction: row;
  margin-top: 3rem;

  .category {
    list-style-type: none;
    margin-right: 2rem;
    cursor: pointer;
    font-size: 14px;
  }
}

.category.active {
  font-weight: bold;
}
</style>
