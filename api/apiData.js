import axios from "axios";

export default {
  // 카테고리 데이터 불러오기
  async fetchGroupData() {
    return axios.get("https://gw.x2bee.com/api/display/v1/plan/group");
  },

  // 정렬된 데이터 불러오기
  async fetchSortPlan(sort, pageNo, pageSize, grpNo) {
    let newPageSize = Number(pageNo) * Number(pageSize);
    return await axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&sortType=${sort}&pageNo=1&pageSize=${newPageSize}&progressYn=Y&dispGrpNo=${grpNo}`
    );
  },

  // 그룹 별 페이지 데이터 불러오기
  async fetchGroupPlan(sortType, pageNo, dispGrpNo) {
    return axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&sortType=${sortType}&pageNo=${pageNo}&pageSize=9&progressYn=Y&dispGrpNo=${dispGrpNo}`
    );
  },

  async fetchPlanList(sortType, pageNo, dispGrpNo) {
    // 2페이지 이상일 경우
    return axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispMediaCd=99&sortType=${sortType}&pageNo=1&pageSize=${
        9 * pageNo
      }&progressYn=Y&dispGrpNo=${dispGrpNo}`
    );
  },

  async fetchPlanDetail(mkdpNo) {
    // 개별 plan 데이터 불러오기
    return axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planDetail/${mkdpNo}`
    );
  },

  async fetchSortGoods(mkdpNo, divobjNo, sortType) {
    // 기획전 상세에서 goods 정렬
    return axios.get(
      `https://fo.x2bee.com/api/display/v1/plan/planGoodsInfo?mkdpNo=${mkdpNo}&divobjNo=${divobjNo}&sort=${sortType}&dispMediaCd=99`
    );
  },

  async getPlanFavorite() {
    return axios.get("http://localhost:3001/plan?loginId=ccomo07071");
  },

  async addPlanFavorite(newPlan) {
    return axios.post("http://localhost:3001/plan", newPlan);
  },

  async deletePlanFavorite(id) {
    return axios.delete(`http://localhost:3001/plan/${id}`);
  },

  async getGoodsFavorite() {
    return axios.get("http://localhost:3001/goods?loginId=ccomo07071");
  },

  async addGoodsFavorite(newGoods) {
    return axios.post("http://localhost:3001/goods", newGoods);
  },

  async deleteGoodsFavorite(id) {
    return axios.delete(`http://localhost:3001/goods/${id}`);
  },
};
