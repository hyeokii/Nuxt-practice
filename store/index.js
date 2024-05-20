import apiData from "../api/apiData";

export const state = () => ({
  planFavoriteData: [],
  goodsFavoriteData: [],
});

export const mutations = {
  SET_PLAN_FAVORITE(state, planFavoriteData) {
    state.planFavoriteData = planFavoriteData;
  },
  ADD_PLAN_FAVORITE(state, newObj) {
    state.planFavoriteData.push({ ...newObj });
  },
  DELETE_PLAN_FAVORITE(state, id) {
    state.planFavoriteData = state.planFavoriteData.filter(
      (plan) => plan.id !== id
    );
  },

  SET_GOODS_FAVORITE(state, goodsFavoriteData) {
    state.goodsFavoriteData = goodsFavoriteData;
  },
  ADD_GOODS_FAVORITE(state, newObj) {
    state.goodsFavoriteData.push({ ...newObj });
  },
  DELETE_GOODS_FAVORITE(state, id) {
    state.goodsFavoriteData = state.goodsFavoriteData.filter(
      (goods) => goods.id !== id
    );
  },
};

export const actions = {
  async addPlanFavorite({ commit }, newPlan) {
    const newObj = await apiData.addPlanFavorite(newPlan);
    commit("ADD_PLAN_FAVORITE", newObj.data);
  },

  async deletePlanFavorite({ commit }, id) {
    await apiData.deletePlanFavorite(id);
    commit("DELETE_PLAN_FAVORITE", id);
  },

  async addGoodsFavorite({ commit }, newGoods) {
    const newObj = await apiData.addGoodsFavorite(newGoods);
    commit("ADD_GOODS_FAVORITE", newObj.data);
  },

  async deleteGoodsFavorite({ commit }, id) {
    await apiData.deleteGoodsFavorite(id);
    commit("DELETE_GOODS_FAVORITE", id);
  },
};

// getter를 만들어서 computed처럼 쓸 수 있음.
// key, value로 좋아요 데이터 관리.
