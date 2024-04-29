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
import MainSwiper from "../components/MainSwiper.vue";
import MainIcon from "../components/MainIcon.vue";
import MainEvent from "../components/MainEvent.vue";
import MainBrand from "../components/MainBrand.vue";
import MainGoods from "../components/MainGoods.vue";
import PlanShopSwiper from "../components/PlanShopSwiper.vue";

import { getDataFromAPI } from "../api";

export default {
  name: "MainPage",
  components: {
    main_swiper: MainSwiper,
    planshop_01: PlanShopSwiper,
    image_banner_10: MainEvent,
    image_banner_11: MainBrand,
    goods_list_02: MainGoods,
    image_text_icon_01: MainIcon,
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
