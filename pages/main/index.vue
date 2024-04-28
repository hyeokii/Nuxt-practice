<template>
  <div class="pg-main">
    <component v-for="(corner, index) in list" :is="corner.vueCmptId && toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
  </div>
</template>
<script>
import {camelCase} from "lodash"
export default {
  layout: "Main",

  async asyncData({ $axios }) {
    const mainData = await $axios.get(
      // "http://192.168.0.156:8094/api/display/v1/shop/1"
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
  computed: {
    isView() {
      return (this.cornerData?.setList[0]?.contentInfoList[0]?.imageList ?? []).length > 0 
    }
  },
  methods: {
    toCamelCase(str) {
      this.$options.components
      console.log('hi', camelCase(str))
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
