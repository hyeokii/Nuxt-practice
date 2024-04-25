<template>
  <div class="pg-main">
    <component v-for="(corner, index) in list" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
  </div>
</template>
<script>
import {camelCase} from "lodash"
// import { apiData } from "~@/api/apiData.js";
export default {
  layout: "Main",

  async asyncData({ $axios }) {
    const mainData = await $axios.get(
      "https://gw.x2bee.com/api/display/v1/shop/1"
    );

    console.log(mainData);
    console.log('11111');
    return {
      list: mainData?.data?.conrList ?? [],      
    };
  },
  created() {
  
  },
  mounted() {
    
  },
  data() {
    return {
      title: null,
      kvData: null,
    };
  },
  computed: {},
  methods: {
    toCamelCase(str) {
      return camelCase(str)
    },
   
  },
};
</script>

<style lang="scss" scoped>
.pg-main {
  padding-bottom:120px;
}
</style>
