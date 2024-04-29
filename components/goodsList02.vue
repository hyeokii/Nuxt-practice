<template>
  <section v-if="isView">
    <SectionTitle :secTitle="`${cornerData.mappTtl}`" />
    <div class="tabs">
      <Tab v-for="(item, index) in cornerData.setList" :currentTab="currentTab" @tabClicked="changeTab" v-bind:key="index" :index="index">
        {{ item.contentInfoList[0].textList[0].contTitleNm }}
      </Tab>
    </div>
    <TabCont v-for="(item,index) in cornerData.setList" :tabNumber="index" :currentTab="currentTab" v-bind:key="index">
      <ProductList :productList="item"/>
    </TabCont>
  </section>
</template>
<script>

export default {
  name: "goodsList02",

  props: {
    cornerData: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {
        currentTab: 0,
        tab: [],
    };
  },
  methods: {},
  computed: {
    isView() {
      return (this.cornerData?.setList ?? []).length > 0 
    },    
  },
  methods: {
    changeTab(index) {
      this.currentTab = index;
      // console.log(index)
    },
  }
};
</script>
<style lang="scss" scoped>

</style>
