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
        v-for="(group, idx) in groupData"
        :key="`${idx}${dispGrpNo}`"
        @click="routeToGroup(group.dispGrpNo, idx + 1)"
        class="category"
        :class="{ active: selectedGroup === idx + 1 }"
      >
        {{ group.dispGrpNm }}
      </li>
    </ul>
    <sortSelectBox />
    <PlanList :planList="planList" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState([
      "groupData",
      "planList",
      "dispGrpNo",
      "dispMediaCd",
      "pageNo",
      "pageSize",
      "sortType",
      "totalGroupPlan",
    ]),
  },
  data() {
    return {
      newGrpNo: "",
      selectedGroup: 0,
    };
  },
  async asyncData({ store }) {
    await store.dispatch("fetchGroupData");
    await store.dispatch("fetchGroupPlan");
    await store.dispatch("fetchTotalGroupPlan");
    return {};
  },
  methods: {
    ...mapActions([
      "fetchGroupData",
      "fetchPlanList",
      "resetPageNo",
      "fetchTotalGroupPlan",
    ]),
    async routeToGroup(newGrpNo, groupNo) {
      await this.$store.dispatch("resetPageNo");
      this.newGrpNo = newGrpNo;
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
      await this.$store.dispatch("setNewGrpNo", this.newGrpNo);
      await this.$store.dispatch("fetchTotalGroupPlan");
      await this.$store.dispatch("fetchGroupPlan", {
        pgNo: 1,
        grpNo: this.dispGrpNo,
        sort: this.sortType,
      });
      this.selectedGroup = groupNo;
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
