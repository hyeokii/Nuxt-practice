import apiData from "@/api/apiData.js";

export const state = () => ({
  totalData: [],
  swiperData: [],
  menuData: [],
  planShopData: [],
  goodsListData: [],
  brandData: [],
});

export const mutations = {
  SET_TOTAL_DATA(state, totalData) {
    totalData.forEach((data, idx) => {
      switch (data.vueCmptId) {
        case "main_swiper":
          state.swiperData = data.setList || [];
          break;
        case "menu":
          state.menuData = data.setList || [];
          break;
        case "planshop_01":
          state.planShopData = data.setList || [];
          break;
        case "event":
          state.eventData = data.setList || [];
          break;
        case "image_banner_11":
          state.brandData = data.setList || [];

          break;
        case "goods_list_02":
          state.goodsListData = data.setList || [];
          break;
        default:
          break;
      }
    });
  },
};

export const actions = {
  async getData({ commit }) {
    const res = await apiData.fetchData();
    commit("SET_TOTAL_DATA", res.data.conrList);
  },
};
