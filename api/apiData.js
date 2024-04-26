import axios from "axios";

export default {
  async fetchData() {
    return axios.get("http://192.168.0.156:8094/api/display/v1/shop/1");
  },
};
