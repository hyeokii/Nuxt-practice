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
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    group() {
      return this.$route.query.group ?? "";
    },
    sortOption() {
      return this.$route.query.sortOption;
    },
  },
  data() {
    return {
      activeBtn: this.$route.query.group,
    };
  },

  methods: {
    goToCategory(categoryId) {
      this.activeBtn = categoryId;
      const query = { pageNo: 1, group: categoryId };
      if (this.sortOption) {
        query.sortOption = this.sortOption;
      }
      this.$router.push({
        path: "/plan",
        query: query,
      });
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
