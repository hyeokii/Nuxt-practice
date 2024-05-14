<template>
  <div class="planWrapper">
    <ul class="categoryContainer">
      <li
        class="category"
        @click="routeToGroup('', '0')"
        :class="{ active: selectedGroup === '0' }"
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
    <sortSelectBox
      @updatePlanList="updatePlanList"
      :planList="planList"
      :sortType="sortType"
    />
    <PlanList
      :planList="planList"
      @addPlanList="addPlanList"
      :totalCount="totalCount"
      :sortType="sortType"
      :curPageNo="curPageNo"
    />
  </div>
</template>

<script>
import apiData from "../../api/apiData";
// watch는 최대한 지양해라.
// 원본데이터는 바꾸지 마라.

export default {
  data() {
    return {
      categoryData: [],
      planList: [],
      pageNo: 1,
      selectedGroup: "0",
      // query에 저장(O)
      sortType: "recent",
      totalCount: 0,
      curPageNo: 1,
      // 자식 컴포넌트에 props로 내려서 관리(emit) => 자식 컴포넌트는 따로 선언할 필요 X (O)
    };
  },
  async asyncData({ route }) {
    const query = route.query;
    const categoryData = await apiData.fetchGroupData();
    // 카테고리 데이터
    const totalData = await apiData.fetchPlanList(
      query.sortType ? query.sortType : "recent",
      query.pageNo ? Number(query.pageNo) : 1,
      query.dispGrpNo === null || query.dispGrpNo === undefined
        ? ""
        : query.dispGrpNo
    );

    //PlanList 데이터
    return {
      categoryData: categoryData.data,
      planList: totalData.data.payload.planInfoList,
      selectedGroup: query.selectedGrp || "0",
      sortType: query.sortType || "recent",
      totalCount: totalData.data.payload.totalCount,
      curPageNo: query.pageNo || 1,
    };
  },
  methods: {
    async routeToGroup(newGrpNo, groupNo) {
      this.curPageNo = 1;
      // 카테고리 누르면 실행
      this.$router.push({
        path: "/plan",
        query: {
          sortType: this.sortType,
          pageNo: this.pageNo,
          dispGrpNo: newGrpNo,
          selectedGrp: groupNo,
        },
      });
      try {
        const responseData = await apiData.fetchGroupPlan(
          this.sortType,
          this.pageNo,
          newGrpNo
        );
        this.planList = responseData.data.payload.planInfoList;
        this.totalCount = responseData.data.payload.totalCount;
      } catch (error) {
        console.error("error", error);
      }
      this.selectedGroup = groupNo;
    },

    async updatePlanList(sortType) {
      // sort api 호출
      this.sortType = sortType;
      const query = this.$router.currentRoute.query;
      try {
        const responseData = await apiData.fetchSortPlan(
          this.sortType,
          query.pageNo || 1,
          9,
          query.dispGrpNo ? query.dispGrpNo : ""
        );
        this.planList = responseData.data.payload.planInfoList;
      } catch (error) {
        console.error("error", error);
      }
    },

    async addPlanList() {
      // 기획전 더보기 버튼
      this.curPageNo = this.curPageNo + 1;
      const query = this.$router.currentRoute.query;
      try {
        const responseData = await apiData.fetchGroupPlan(
          query.sortType ? query.sortType : "recent",
          this.curPageNo,
          query.dispGrpNo === null || query.dispGrpNo === undefined
            ? ""
            : query.dispGrpNo
        );
        this.planList = [
          ...this.planList,
          ...responseData.data.payload.planInfoList,
        ];
      } catch (error) {
        console.error("error", error);
      }
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
