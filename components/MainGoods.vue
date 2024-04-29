<template>
  <div v-if="res.setList.length" class="goods-wrapper">
    <div class="goods-title">추천 상품 리스트</div>
    <div class="goods-tabs">
      <button
        v-for="(item, index) in res.setList"
        :key="item.contentInfoList[0].dispSetSeq"
        :class="{ 'goods-tab': true, active: index === activeTab }"
        @click="handleTabs(item, index)"
      >
        {{ item.contentInfoList[0].textList[0].contTitleNm }}
      </button>
    </div>
    <GoodsList :list="list"></GoodsList>
  </div>
</template>

<script>
import GoodsList from "./GoodsList.vue";

export default {
  components: {
    GoodsList,
  },
  props: {
    res: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      list: this.res.setList[0],
      activeTab: 0,
    };
  },
  methods: {
    handleTabs(item, index) {
      this.activeTab = index;
      this.list = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  .goods-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .goods-tabs {
    display: flex;
    margin-bottom: 40px;
    .goods-tab {
      border: 1px solid #ccc;
      flex-grow: 1;
      padding: 10px 0;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      &.active {
        border-color: black;
      }
    }
  }
}
@media ($desktop) {
  .goods-wrapper {
    width: 1280px;
  }
}
</style>
