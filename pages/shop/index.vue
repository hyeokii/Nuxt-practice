<template>
  <div class="flex">
    <div class="mainContainer flex">
      <component
        v-for="(shop, index) in totalData.conrList"
        :is="toCamel(shop.vueCmptId)"
        :key="`${shop.conrNo}_${index}`"
        :data="shop.setList"
      />
    </div>
  </div>
</template>
<script>
import apiData from "@/api/apiData.js";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

export default {
  data() {
    return {
      totalData: [],
    };
  },
  computed: {
    shopData() {
      if (this.totalData.length) {
        return this.totalData.cornList;
      }
      return []; // 데이터가 없을 경우 빈 배열 반환
    },
  },
  async asyncData() {
    const res = await apiData.fetchData();
    return {
      totalData: res.data,
    };
  },
  methods: {
    toCamel(fileNm) {
      return upperFirst(camelCase(fileNm));
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mainContainer {
  width: 100%;
  padding: 0 5rem;
}
</style>
