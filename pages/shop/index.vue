<template>
  <div class="flex">
    <div class="mainContainer flex">
      <component
        v-for="(shop, index) in shopData.conrList"
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
      shopData: [],
    };
  },
  async asyncData() {
    const res = await apiData.fetchData();
    return {
      shopData: res.data,
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
  width: 1285px;
  padding: 3rem 5rem;
}
</style>
