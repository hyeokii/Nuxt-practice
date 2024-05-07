<template>
  <div class="selectContainer">
    <select class="custom-select" v-model="newSortType" @change="updateRoute">
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
      newSortType: "recent",
    };
  },

  methods: {
    ...mapActions(["fetchSortPlan", "setSortType"]),
    async updateRoute() {
      this.$router.push({
        path: "/plan",
        query: {
          dispGrpNo: this.dispGrpNo,
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
