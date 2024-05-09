<template>
  <div class="selectContainer">
    <div class="custom-select-wrapper">
      <select class="custom-select" v-model="sortType" @change="updateRoute">
        <option value="recent" selected>최신순</option>
        <option value="close">마감순</option>
      </select>
      <span class="arrow">&#9660;</span>
    </div>
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
        console.error("error", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selectContainer {
  width: 1240px;
  padding: 0 3rem;
  margin: 2rem 0;
  display: flex;
  justify-content: end;
}

.custom-select-wrapper {
  position: relative;
  display: inline-block;
}

.custom-select {
  cursor: pointer;
  padding: 0.5rem 3rem;
  border: 1px solid #dfdfdf;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1.2rem;
}
</style>
