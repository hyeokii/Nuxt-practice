export const state = () => ({
  planList: [],
  brandNo: null,
  sortType: "recent",
  dispGrpNo: "",
  pageNo: 1,
  brandNo: "",
});

export const mutations = {
  setPlanList(state, data) {
    state.planList = data;
  },
  setDispGrpNo(state, data) {
    state.dispGrpNo = data;
  },
  setBrandNo(state, option) {
    state.brandNo = option;
  },
  setSortType(state, option) {
    if (option === "최신순") {
      state.sortType = "recent";
    } else if (option === "마감순") {
      state.sortType = "close";
    }
  },
  addPlanList(state, data) {
    state.planList = [...state.planList, ...data];
  },
  setPageNo(state, pageNo) {
    state.pageNo = pageNo;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const res = await this.$axios.get(
        `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&pageSize=9&pageNo=1&sortType=recent&dispGrpNo=&brandNo=`
      );
      commit("setPlanList", res.data.payload.planInfoList);
    } catch (error) {
      console.error("Error fetching initial plans:", error);
      throw error;
    }
  },

  async getPlanList({ commit, state }) {
    commit("setPageNo", 1);
    const res = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&pageSize=9&pageNo=${state.pageNo}&dispGrpNo=${state.dispGrpNo}`
    );
    commit("setPlanList", res.data.payload.planInfoList);
  },

  async addPlanList({ commit, state }) {
    const res = await this.$axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&pageSize=9&pageNo=${state.pageNo}&dispGrpNo=${state.dispGrpNo}`
    );
    commit("addPlanList", res.data.payload.planInfoList);
  },

  async getSortPlanList({ commit, state }) {
    if (state.pageNo !== 1) {
      const size = 9 * state.pageNo;
      const res = await this.$axios.get(
        `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&pageSize=${size}&pageNo=1&dispGrpNo=${state.dispGrpNo}&sortType=${state.sortType}`
      );
      commit("setPlanList", res.data.payload.planInfoList);
    } else {
      const res = await this.$axios.get(
        `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&progressYn=Y&pageSize=9&pageNo=${state.pageNo}&dispGrpNo=${state.dispGrpNo}&sortType=${state.sortType}`
      );
      commit("setPlanList", res.data.payload.planInfoList);
    }
  },

  async getMoreList({ commit, dispatch, state }) {
    commit("setPageNo", state.pageNo + 1);
    await dispatch("addPlanList");
  },
};
