<template>
  <div class="pg-main">
    <component v-for="(corner, index) in list" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <!-- <component v-for="(corner, index) in cornerList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <component v-for="(corner, index) in goodsList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <component v-for="(corner, index) in bannerList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <component v-for="(corner, index) in brandList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/> -->
    <!-- <component v-for="(corner, index) in recommendList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/> -->
    <!-- <section>
      <Tab :tab="tab" :currentTab="currentTab" @tabClicked="changeTab" />
      <div class="tab-content" v-for="(setItem,index) in recommendGoods.setList" :key="index" :cornerData="corner">
        {{ contentInfoList[0].textList[0].contTitleNm }}
      </div>      
    </section> -->
  </div>
</template>
<script>
import {camelCase} from "lodash"
export default {
  layout: "Main",
  async asyncData({ $axios }) {
    const mainData = await $axios.get(
      "https://gw.x2bee.com/api/display/v1/shop/1"
    );

    console.log(mainData);
    console.log('11111');
    // const mainSwiper = mainData.data.conrList[0]
    // const goodsSwiper = mainData.data.conrList[1]
    // const bannerSwiper = mainData.data.conrList[2]
    // const brandSwiper = mainData.data.conrList[3]
    // const recommendList = mainData.data.conrList[4]

    // let tabData = [];
    // recommendList.setList.forEach(tabItem => {
    //   const tabName = tabItem.contentInfoList[0].textList[0].contTitleNm
    //   tabData.push({'name' : tabName});
    // })
  
    return {
      list: mainData?.data?.conrList ?? [],
      // cornerList: [mainSwiper], 
      // goodsList:[goodsSwiper],
      // bannerList:[bannerSwiper],
      // brandList:[brandSwiper],
      // recommendTab : [recommendList],
      // tab : [tabData]
    };
  },
  created() {
    // console.log("created");
    // console.log('contTitleNm', this.cornerList.at(0).setList.at(0).contentInfoList.at(1).textList.at(0).contTitleNm)
  },
  mounted() {
    // console.log("mounted");
  },
  data() {
    return {
      title: null,
      kvData: null,
      // cornerList: [],
      // goodsList: [],
      // brandList: [],
      // bannerList: [],
      // recommenList: [],
      currentTab: 0,
      tab: [],
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
