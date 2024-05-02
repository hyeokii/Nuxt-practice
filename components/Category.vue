<template>
  <div class="category-wrapper">
    <div class="category-list">
      <button>전체sadfasdf</button>
      <button v-for="item in data" :key="item.dispSeq">
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
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 40px 40px;
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
