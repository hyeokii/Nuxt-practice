<template>
  <section class="box-slide" v-if="isView">
    <SectionTitle secTitle="추천 상품 리스트" />
    <Tab :tab="tab" :currentTab="currentTab" @tabClicked="changeTab" />
    <div class="tab-content" v-for="(corner,index) in recommendGoods.setList" :key="index" :cornerData="corner">

    </div>
  </section>
</template>
<script>
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
        tab: [{ name: "tab1" }, { name: "tab2" }, { name: "tab3" }],
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
