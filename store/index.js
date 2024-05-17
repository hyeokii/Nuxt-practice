import apiData from "../api/apiData";

export const state = () => ({
  planFavoriteData: [],
  goodsFavoriteData: [],
});

export const mutations = {
  ADD_PLAN_FAVORITE(state, newPlan) {
    state.planFavoriteData.push({ ...newPlan });
  },
  DELETE_PLAN_FAVORITE(state, id) {
    state.planFavoriteData = state.planFavoriteData.filter(
      (plan) => plan.id !== id
    );
  },

  ADD_GOODS_FAVORITE(state, newGoods) {
    state.goodsFavoriteData.push({ ...newGoods });
  },
  DELETE_GOODS_FAVORITE(state, id) {
    state.goodsFavoriteData = state.goodsFavoriteData.filter(
      (goods) => goods.id !== id
    );
  },
};

export const actions = {
  async addPlanFavorite({ commit }, newPlan) {
    await apiData.addPlanFavorite(newPlan);
    commit("ADD_PLAN_FAVORITE", newPlan);
  },

  async deletePlanFavorite({ commit }, id) {
    await apiData.deletePlanFavorite(id);
    commit("DELETE_PLAN_FAVORITE", id);
  },

  async addGoodsFavorite({ commit }, newGoods) {
    await apiData.addGoodsFavorite(newGoods);
    commit("ADD_GOODS_FAVORITE", newGoods);
  },

  async deleteGoodsFavorite({ commit }, id) {
    await apiData.deleteGoodsFavorite(id);
    commit("DELETE_GOODS_FAVORITE", id);
  },
};
