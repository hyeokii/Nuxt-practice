<template>
  <section class="box-slide" v-if="isView">
    <SectionTitle :secTitle="`${cornerData.mappTtl}`" />
    <Tab :tab="cornerData.setList" :currentTab="currentTab" @tabClicked="changeTab" />
    <TabCont v-for="(item,index) in cornerData.setList" :tabNumber="index" :currentTab="currentTab">
      <ProductList :productList="item"/>
    </TabCont>
    <!-- <div class="tab-content" v-for="(corner,index) in recommendGoods.setList" :key="index" :cornerData="corner">

    </div> -->
  </section>
</template>
<script>
import TabCont from './TabCont.vue';

export default {
  name: "goodsList",

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
    }
  },
  methods: {
    changeTab(key) {
      console.log(key)
      this.currentTab = key;
    },
  }
};
</script>
<style lang="scss" scoped>
@import url('~@/assets/slider.scss');
.box-slide {
  .swiper {
    .swiper-slide {
      img {
        width: 100%;
        height:384px;
        object-fit: cover;
      }
    }
  }
  .text-box {
    margin-top:20px;
    .text {
      font-size:16px;
      line-height:24px;
    }
  }
}
</style>
