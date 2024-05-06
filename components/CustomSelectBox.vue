<template>
  <div>
    <select v-model="newSortType" @change="updateRoute">
      <option value="recent" selected>최신순</option>
      <option value="close">마감순</option>
    </select>
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
    ]),
  },
  data() {
    return {
      newSortType: "",
    };
  },

  methods: {
    ...mapActions(["fetchSortPlan", "setSortType"]),
    async updateRoute() {
      this.$router.push({
        path: "/plan",
        query: {
          dispGrpNo: this.dispGrpNo, // 예시 매개변수, 필요에 따라 변경 가능
          sortType: this.newSortType,
        },
      });
      await this.$store.dispatch("setSortType", this.newSortType);
      await this.$store.dispatch("fetchSortPlan", {
        grpNo: this.dispGrpNo,
        sort: this.sortType,
      });
    },
  },
};
</script>
