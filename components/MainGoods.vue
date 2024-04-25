<template>
  <div class="goods-wrapper">
    <div class="goods-title">추천 상품 리스트</div>
    <div class="goods-tabs">
      <button
        v-for="item in res.setList"
        :key="item.contentInfoList[0].dispSetSeq"
        :class="{ 'goods-tab': true, active: item.setNm === activeTab }"
        @click="handleTabs(item.setNm)"
      >
        {{ item.contentInfoList[0].textList[0].contTitleNm }}
      </button>
    </div>
    <TabOne :list="list"></TabOne>

    <!-- 탭으로 구현 -->
    <!-- <div class="tab-item">
      <keep-alive>
        <component v-bind:is="tabs" :list="list"></component>
      </keep-alive>
    </div> -->
  </div>
</template>

<script>
import TabOne from "./TabOne.vue";
// import TabTwo from "./TabTwo.vue";
// import TabThree from "./TabThree.vue";
export default {
  components: {
    TabOne,
    // TabTwo,
    // TabThree,
  },
  props: {
    res: {
      Object,
    },
  },
  data() {
    return {
      // tabs: "TabOne",
      list: {},
      activeTab: "탭1",
    };
  },
  async fetch() {
    this.list = this.res.setList.find((item) => item.setNm === "탭1") || {};
  },
  methods: {
    // 탭으로 구현
    // handleTabs(TabName) {
    //   this.list = this.res.find((item) => item.setNm === TabName);
    //   switch (TabName) {
    //     case "탭1":
    //       this.tabs = "TabOne";
    //       break;
    //     case "탭2":
    //       this.tabs = "TabOne";
    //       break;
    //     case "탭3":
    //       this.tabs = "TabThree";
    //       break;
    //     default:
    //       this.tabs = "TabOne";
    //   }
    // },

    handleTabs(tab) {
      this.activeTab = tab;
      this.list = this.res.setList.find((item) => item.setNm === tab);
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
