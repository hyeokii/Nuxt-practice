import axios from "axios";

export default {
  // 카테고리 데이터 불러오기
  async fetchGroupData() {
    return axios.get("https://gw.x2bee.com/api/display/v1/plan/group");
  },

  // 정렬된 데이터 불러오기
  async fetchSortPlan(sort, pageNo, pageSize, grpNo) {
    console.log(pageNo, pageSize);
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
};
