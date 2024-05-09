export const state = () => ({
  planList: [],
  totalGroupPlan: [],
  dispGrpNo: "",
  dispMediaCd: 99,
  sortType: "recent",
  pageNo: 1,
  pageSize: 9,
  progressYn: "Y",
});

export const mutations = {
  SET_GROUP_DATA(state, groupData) {
    state.groupData = groupData;
  },
  SET_TOTAL_LIST(state, totalGroupPlan) {
    state.totalGroupPlan = totalGroupPlan;
  },
  SET_GROUP_PLAN(state, planList) {
    state.planList = planList;
  },
  SET_NEW_GRPNO(state, dispGrpNo) {
    state.dispGrpNo = dispGrpNo;
  },
  SET_SORT_TYPE(state, sortType) {
    state.sortType = sortType;
  },
  SET_SORT_PLAN(state, planList) {
    state.planList = planList;
  },
  INCREMENT_PAGE_NO(state) {
    state.pageNo++;
  },
  SET_MORE_PLAN(state, moreData) {
    state.planList = [...state.planList, ...moreData.payload.planInfoList];
  },
  RESET_PAGE_NO(state) {
    state.pageNo = 1;
  },
};
export const actions = {
  async fetchGroupData({ commit }) {
    const response = await this.$axios.get(
      "https://gw.x2bee.com/api/display/v1/plan/group"
    );
    commit("SET_GROUP_DATA", response.data);
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
