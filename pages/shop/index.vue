<template>
  <div class="flex">
    <div class="mainContainer flex">
      <!-- <MainSlide />
      <Menu />
      <MdPick />
      <Brand />
      <Tab /> -->
      <component
        v-for="(shop, index) in shopData.conrList"
        :is="shop.vueCmptId"
        :key="`${shop.conrNo}_${index}`"
        :data="shop.setList"
      />
    </div>
  </div>
</template>
<script>
import apiData from "@/api/apiData.js";
import main_swiper from "@/components/MainSwiper.vue";
import planshop_01 from "@/components/planshop_01.vue";
import image_banner_11 from "@/components/imageBanner_11.vue";
import goods_list_02 from "@/components/goodsList_02.vue";

export default {
  components: {
    main_swiper,
    planshop_01,
    image_banner_11,
    goods_list_02,
  },
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
  async created() {
    // await this.$store.dispatch("getData");
  },
  methods: {
    snakeToCamel(str) {
      return str.replace(/_([a-z])/g, function (match, group1) {
        return group1.toUpperCase();
      });
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
