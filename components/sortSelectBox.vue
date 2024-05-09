<template>
  <div class="selectContainer">
    <select class="custom-select" v-model="sortType" @change="updateRoute">
      <option value="recent" selected>최신순</option>
      <option value="close">마감순</option>
    </select>
  </div>
</template>

<script>
import apiData from "../api/apiData";

export default {
  data() {
    return {
      sortType: this.$router.currentRoute.query.sortType || "recent",
    };
  },

  props: {
    planList: { type: Array, required: true },
  },

  methods: {
    async updateRoute() {
      const currentRoute = this.$router.currentRoute;
      const { query } = currentRoute;
      const { pageNo = "1", pageSize = "9", dispGrpNo = "" } = query;

      const newQuery = {
        ...query,
        sortType: this.sortType,
      };

      this.$router.push({
        path: "/plan",
        query: newQuery,
      });

      try {
        const responseData = await apiData.fetchSortPlan(
          this.sortType,
          pageNo,
          pageSize,
          dispGrpNo === null ? "" : dispGrpNo
        );
        this.$emit("updatePlanList", responseData.data.payload.planInfoList);
        localStorage.setItem("sortType", this.sortType);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selectContainer {
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: end;
  margin: 2rem 0;
}
.custom-select {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
}

.custom-select option {
  font-weight: normal;
  padding: 10px 20px;
}
</style>
