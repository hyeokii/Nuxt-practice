<template>
  <div class="category-wrapper">
    <div class="category-list">
      <button
        @click="goToCategory('', -1)"
        :class="{ categoryBtn: true, active: activeBtn === -1 }"
      >
        전체
      </button>
      <button
        v-for="(item, index) in data"
        :key="item.dispGrpNo"
        @click="goToCategory(item.dispGrpNo, index)"
        :class="{ categoryBtn: true, active: index === activeBtn }"
      >
        {{ item.dispGrpNm }}
      </button>
    </div>
  </div>
</template>

<script>
import PlanList from "./PlanList.vue";

export default {
  components: {
    PlanList,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeBtn: -1,
    };
  },

  methods: {
    goToCategory(categoryId, index) {
      this.activeBtn = index;
      this.$store.commit("setDispGrpNo", categoryId);
      this.$router.push({
        path: "/plan",
        query: { pageNo: 1, group: categoryId },
      });
      this.$store.dispatch("getPlanList");
    },
  },
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 20px 80px;
  .category-list {
    position: relative;
    width: 100%;
    display: flex;
    gap: 20px;
    .categoryBtn {
      font-size: 16px;
      color: #767676;
      font-weight: bold;
      &.active {
        color: black;
      }
    }
  }
}

@media ($desktop) {
  .category-wrapper {
    width: 1280px;
  }
}
</style>
