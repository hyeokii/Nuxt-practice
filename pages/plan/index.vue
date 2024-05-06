<template>
  <div>
    <ul>
      <li @click="routeToGroup('')">전체</li>
      <li
        v-for="(group, idx) in groupData"
        :key="idx"
        @click="routeToGroup(group.dispGrpNo)"
      >
        {{ group.dispGrpNm }}
      </li>
    </ul>
    <CustomSelectBox />
    <PlanList :planList="planList" />
  </div>
</template>

<script>
import CustomSelectBox from "../../components/CustomSelectBox.vue";
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
    ]),
  },
  data() {
    return {
      newGrpNo: "",
    };
  },
  async asyncData({ store }) {
    await store.dispatch("fetchGroupData");
    await store.dispatch("fetchGroupPlan", { pgNo: 1, grpNo: "" });
    return {};
  },
  methods: {
    ...mapActions([
      "fetchGroupData", // Store의 action 호출
      "fetchPlanList", // Store의 action 호출
    ]),
    async routeToGroup(newGrpNo) {
      this.$router.push({
        path: "/plan",
        query: {
          dispMediaCd: this.dispMediaCd,
          // sortType: this.sortType,
          pageNo: this.pageNo,
          pageSize: "9",
          // progressYn: this.progressYn,
          // brandNo: this.brandNo,
          dispGrpNo: newGrpNo,
        },
      });
      await this.$store.dispatch("setNewGrpNo", newGrpNo);
      await this.$store.dispatch("fetchGroupPlan", {
        pgNo: 1,
        grpNo: newGrpNo,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: row;
  margin-top: 3rem;

  li {
    list-style-type: none;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
