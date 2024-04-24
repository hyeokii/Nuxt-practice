<template>
  <div class="mdPickContainer">
    <Title :title="'추천 상품 리스트'" />
    <div class="tabButtons">
      <button
        v-for="(goods, idx) in data"
        :key="idx"
        @click="currentTab = `Tab${idx + 1}`"
        :class="{ 'active-tab': currentTab === `Tab${idx + 1}` }"
      >
        {{ goods.contentInfoList[0].textList[0].contTitleNm }}
      </button>
      <div class="tabContent">
        <component
          :is="currentTab"
          :data="data.filter((tab) => tab.setNm === curTabNm)"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

export default {
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
  props: {
    data: Array,
  },
  data() {
    return {
      currentTab: "Tab1",
    };
  },
  computed: {
    curTabNm() {
      if (this.currentTab === "Tab1") {
        return "탭1";
      } else if (this.currentTab === "Tab2") {
        return "탭2";
      } else if (this.currentTab === "Tab3") {
        return "탭3";
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mdPickContainer {
  width: 1240px;
}

.tabButtons {
  width: 100%;
  padding: 0 25px;
}

.tabTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 3rem;
}

.tabButtons button {
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border: 1px solid rgb(231, 231, 231);
  width: 33%;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: black;
  font-weight: 500;
}

.tabButtons button.active-tab {
  border: 1px solid black;
  font-weight: 700;
}

.tabContent {
  margin-top: 20px;
}
</style>
