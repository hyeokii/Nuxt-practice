import apiData from "../api/apiData";

export const state = () => ({
  planFavoriteData: [],
});

export const mutations = {
  SET_PLAN_FAVORITE(state, planFavoriteData) {
    state.planFavoriteData = planFavoriteData;
  },
  ADD_PLAN_FAVORITE(state, newPlan) {
    state.planFavoriteData.push({ ...newPlan });
  },
  DELETE_PLAN_FAVORITE(state, id) {
    state.planFavoriteData = state.planFavoriteData.filter(
      (plan) => plan.id !== id
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

  async setNewGrpNo({ commit }, grpNo) {
    commit("SET_NEW_GRPNO", grpNo);
  },
  async setSortType({ commit }, sort) {
    commit("SET_SORT_TYPE", sort);
  },
  async fetchSortPlan({ commit, state }, { grpNo, sort }) {
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&sortType=${sort}&pageNo=1&pageSize=${
        state.pageNo * state.pageSize
      }&progressYn=Y&dispGrpNo=${grpNo}`
    );
    commit("SET_SORT_PLAN", response.data.payload.planInfoList);
  },
  async fetchGroupPlan({ commit, state }) {
    // 페이지 번호 사용
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&sortType=${state.sortType}&pageNo=${state.pageNo}&pageSize=${state.pageSize}&progressYn=Y&dispGrpNo=${state.dispGrpNo}`
    );
    if (state.pageNo >= 2) {
      commit("SET_MORE_PLAN", response.data);
    } else {
      commit("SET_GROUP_PLAN", response.data.payload.planInfoList);
    }
  },
  async fetchTotalGroupPlan(dispGrpNo) {
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&dispGrpNo=${dispGrpNo}`
    );
    commit("SET_TOTAL_LIST", response.data.payload.planInfoList);
  },
  async incrementPageNo({ commit }) {
    commit("INCREMENT_PAGE_NO");
  },
  async resetPageNo({ commit }) {
    commit("RESET_PAGE_NO");
  },
};
