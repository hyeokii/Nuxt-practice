import apiData from "@/api/apiData.js";

export const state = () => ({
  totalData: [],
  swiperData: [],
  menuData: [],
  planShopData: [],
  eventData: [],
  brandData: [],
  mdPickData: [],
});

export const mutations = {
  SET_TOTAL_DATA(state, totalData) {
    state.totalData = totalData;
    state.swiperData = totalData.conrList[0].setList;
    state.menuData = totalData.conrList[1].setList;
    state.planShopData = totalData.conrList[2].setList;
    state.eventData = totalData.conrList[3].setList;
    state.brandData = totalData.conrList[4].setList;
    state.mdPickData = totalData.conrList[5].setList;
  },
};

export const actions = {
  async getData({ commit }) {
    const res = await apiData.fetchData();
    commit("SET_TOTAL_DATA", res.data);
    console.log(res.data.conrList);
  },
};
