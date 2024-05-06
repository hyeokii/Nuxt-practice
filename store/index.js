export const state = () => ({
  groupData: [],
  planList: [],
  dispGrpNo: "",
  dispMediaCd: 99,
  sortType: "recent",
  pageNo: 1,
  pageSize: 9,
  progressYn: "",
});

export const mutations = {
  SET_GROUP_DATA(state, groupData) {
    state.groupData = groupData;
  },
  SET_PLAN_LIST(state, planList) {
    state.planList = planList;
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
};
export const actions = {
  async fetchGroupData({ commit }) {
    const response = await this.$axios.get(
      "https://gw.x2bee.com/api/display/v1/plan/group"
    ); // API 경로는 예시입니다.
    commit("SET_GROUP_DATA", response.data);
  },
  // async fetchPlanList({ commit }) {
  //   const response = await this.$axios.get(
  //     `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&pageNo=1&pageSize=9&sortType=recent`
  //   ); // API 경로는 예시입니다.
  //   commit("SET_PLAN_LIST", response.data);
  // },
  async fetchGroupPlan({ commit }, { grpNo, pgNo }) {
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&pageNo=${pgNo}&pageSize=9&dispGrpNo=${grpNo}&sortType=recent`
    ); // API 경로는 예시입니다.
    commit("SET_GROUP_PLAN", response.data);
  },
  async setNewGrpNo({ commit }, grpNo) {
    commit("SET_NEW_GRPNO", grpNo);
  },
  async setSortType({ commit }, sort) {
    commit("SET_SORT_TYPE", sort);
  },
  async fetchSortPlan({ commit }, { grpNo, sort }) {
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&pageNo=1&dispGrpNo=${grpNo}&sortType=${sort}`
    );
    commit("SET_SORT_PLAN", response.data);
  },
  async fetchGroupPlan({ commit }, { pgNo, grpNo, sort }) {
    const response = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&pageNo=${pgNo}&dispGrpNo=${grpNo}&sortType=${sort}`
    );
    commit("SET_GROUP_PLAN", response.data);
  },
};
