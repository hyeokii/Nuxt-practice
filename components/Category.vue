<template>
  <div class="category-wrapper">
    <div class="category-list">
      <button @click="goToCategory('')">전체</button>
      <button
        v-for="item in data"
        :key="item.dispGrpNo"
        @click="goToCategory(item.dispGrpNo)"
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
    return {};
  },

  methods: {
    goToCategory(categoryId) {
      this.$router.push({
        path: "/plan",
        query: { pageNo: 1, group: categoryId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 20px 100px;
  .category-list {
    position: relative;
    width: 100%;
    display: flex;
    gap: 20px;
  }
}

@media ($desktop) {
  .category-wrapper {
    width: 1280px;
  }
}
</style>
