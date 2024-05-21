<template>
  <div class="category-wrapper">
    <div class="category-list">
      <button
        @click="goToCategory('')"
        :class="{ categoryBtn: true, active: activeBtn === '' }"
      >
        전체
      </button>
      <button
        v-for="item in data"
        :key="item.dispGrpNo"
        @click="goToCategory(item.dispGrpNo)"
        :class="{ categoryBtn: true, active: item.dispGrpNo === activeBtn }"
      >
        {{ item.dispGrpNm }}
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "..";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeBtn: this.$route.query.group || "",
      group: this.$route.query.group ?? "",
      sortOption: this.$route.query.sortOption ?? "recent",
      pageNo: this.$route.query.pageNo ?? "1",
    };
  },

  methods: {
    goToCategory(categoryId) {
      this.activeBtn = categoryId;
      const query = { group: categoryId };
      query.pageNo = this.$route.query.pageNo;
      if (this.sortOption) {
        query.sortOption = this.sortOption;
      }
      EventBus.$emit("planList-event", "categoryId-event", categoryId, query);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
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
</style>
