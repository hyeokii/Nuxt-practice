<template>
  <div class="planWrapper">
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
        :key="`${idx}${dispGrpNo}`"
        @click="routeToGroup(group.dispGrpNo, idx + 1)"
        class="category"
        :class="{ active: selectedGroup === idx + 1 }"
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
export default {
  data() {
    return {
      categoryData: [],
      planList: [],
      totalGroupData: [],
      dispMediaCd: 99,
      pageNo: 1,
      pageSize: 9,
      selectedGroup: 0,
      sortType: "recent",
      dispGrpNo: "",
    };
  },
  async asyncData({ route }) {
    let query = route.query;
    const categoryData = await apiData.fetchGroupData();
    const totalData = await apiData.fetchPlanList(
      query.sortType ? query.sortType : "recent",
      query.pageNo ? query.pageNo : 1,
      query.dispGrpNo === null || query.dispGrpNo === undefined
        ? ""
        : query.dispGrpNo
    );
    return {
      categoryData: categoryData.data,
      planList: totalData.data.payload.planInfoList,
    };
  },
  mounted() {
    this.selectedGroup = Number(localStorage.getItem("selectedGroup"));
    this.sortType = localStorage.getItem("sortType");
  },
  methods: {
    async routeToGroup(newGrpNo, groupNo) {
      this.$router.push({
        path: "/plan",
        query: {
          sortType: localStorage.getItem("sortType") || "recent",
          pageNo: this.pageNo,
          dispGrpNo: newGrpNo,
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
        console.error("API 요청 중 오류 발생:", error);
      }
      this.selectedGroup = groupNo;
      localStorage.setItem("selectedGroup", groupNo);
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
