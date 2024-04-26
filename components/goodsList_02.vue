<template>
  <div class="mdPickContainer" v-if="data">
    <Title :title="'추천 상품 리스트'" />
    <div class="tabButtons">
      <button
        v-for="(goods, idx) in data"
        :key="idx"
        @click="currentTab = `${idx}`"
        :class="{ 'active-tab': currentTab === `${idx}` }"
      >
        {{ goods.contentInfoList[0].textList[0].contTitleNm }}
      </button>
      <div class="tabContent">
        <Tab :key="idx" :data="data[currentTab]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      currentTab: "0",
    };
  },
  computed: {},
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
  display: flex;
  align-content: center;

  @media (max-width: 1200px) {
    width: 1200px;
  }
}
</style>
