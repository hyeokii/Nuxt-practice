import axios from "axios";

export default {
  async fetchGroups() {
    return axios.get("https://gw.x2bee.com/api/display/v1/plan/group");
  },
  async fetchPlans() {
    return axios.get("https://gw.x2bee.com/api/display/v1/plan/planList");
  },
  async fetchGroup(grpNo) {
    return axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispGrpNo=${grpNo}`
    );
  },
  async fetchSorted(grpNo, sort) {
    return axios.get(
      `https://gw.x2bee.com/api/display/v1/plan/planList?dispGrpNo=${grpNo}&sortType=${sort}`
    );
  },
};
