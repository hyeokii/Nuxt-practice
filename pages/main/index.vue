<template>
  <div class="pg-main">
    <component v-for="(corner, index) in cornerList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <component v-for="(corner, index) in goodsList" :is="toCamelCase(corner.vueCmptId)" :key="index" :cornerData="corner"/>
    <!-- <Keyvisual :kvData="kvData" /> -->    
    <section>
      <SectionTitle secTitle="주목해야 할 브랜드" />    
    </section>
    <section>
      <Tab :tab="tab" :currentTab="currentTab" @tabClicked="changeTab" />
      <div class="tab-content" v-for="(setItem,index) in recommendGoods.setList" :key="index" :cornerData="corner">
        {{ contentInfoList[0].textList[0].contTitleNm }}
      </div>
      <!-- <div class="tab-content" v-if="currentTab === 0">탭1</div>
      <div class="tab-content" v-if="currentTab === 1">탭2</div>
      <div class="tab-content" v-if="currentTab === 2">탭3</div> -->
    </section>
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
    const mainSwiper = mainData.data.conrList[0]
    const goodsSwiper = mainData.data.conrList[1]
    const recommendTab = mainData.data.conrList[4]

    let tabData = [];

    recommendTab.setList.forEach(tabData => {
      const tabName = tabData.contentInfoList[0].textList[0].contTitleNm
      console.log(tabName)
      // tabData.push({'name' : tabName});
    })
    console.log('111')
  
    return {
      cornerList: [mainSwiper], 
      goodsList:[goodsSwiper],
      recommendTab : [recommendTab],
      tab : [tabData]
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
      cornerList: [],
      goodsList: [],
      recommendGoods: [],
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
.tab-content {
  padding-top: 40px;
}
</style>
