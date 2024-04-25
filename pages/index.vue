<template>
  <div class="containers">
    <component
      v-for="item in res"
      :key="item.conrNo"
      v-bind:is="item.vueCmptId"
      :res="item"
    ></component>
  </div>
</template>
<script>
import main_swiper from "../components/MainSwiper.vue";
import image_banner_10 from "../components/MainEvent.vue";
import image_banner_11 from "../components/MainBrand.vue";
import goods_list_02 from "../components/MainGoods.vue";
import planshop_01 from "../components/PlanShopSwiper.vue";
import { getDataFromAPI } from "../api";

export default {
  name: "MainPage",
  components: {
    main_swiper,
    planshop_01,
    image_banner_10,
    image_banner_11,
    goods_list_02,
  },

  async asyncData() {
    const res = await getDataFromAPI();
    return { res };
  },
};
</script>

<style lang="scss" scoped>
.containers {
  width: 100%;
  margin: 0 auto;
}
</style>
