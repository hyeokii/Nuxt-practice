import axios from "axios";

export default {
  async fetchData() {
    return axios.get("https://gw.x2bee.com/api/display/v1/shop/1");
  },
};
