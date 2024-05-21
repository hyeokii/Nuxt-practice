const BASE_URL = "http://localhost:3001";

export const state = () => ({
  currentLoginId: "re2volution",
  planFavorite: [],
  goodsFavorite: [],
});

export const mutations = {
  SET_PLANFAVORITE(state, plans) {
    state.planFavorite = plans;
  },
  ADD_PLANFAVORITE(state, plan) {
    state.planFavorite.push(plan);
  },
  DELETE_PLANFAVORITE(state, planId) {
    state.planFavorite = state.planFavorite.filter(
      (plan) => plan.mkdpNo !== planId
    );
  },

  SET_GOODSFAVORITE(state, goods) {
    state.goodsFavorite = goods;
  },
  ADD_GOODSFAVORITE(state, good) {
    state.goodsFavorite.push(good);
  },
  DELETE_GOODSFAVORITE(state, goodsNo) {
    state.goodsFavorite = state.goodsFavorite.filter(
      (good) => good.goodsNo !== goodsNo
    );
  },
};

export const actions = {
  async nuxtServerInit({ commit, state }) {
    try {
      const res = await this.$axios.get(
        `${BASE_URL}/plan?loginId=${state.currentLoginId}`
      );
      commit("SET_PLANFAVORITE", res.data);
      const res2 = await this.$axios.get(
        `${BASE_URL}/goods?loginId=${state.currentLoginId}`
      );
      commit("SET_GOODSFAVORITE", res2.data);
    } catch (error) {
      console.error("Error fetching initial plans:", error);
      throw error;
    }
  },

  async getPlanFavorite({ commit, state }) {
    const res = await this.$axios.get(
      `${BASE_URL}/plan?loginId=${state.currentLoginId}`
    );
    commit("SET_PLANFAVORITE", res.data);
  },

  async getGoodsFavorite({ commit, state }) {
    const res = await this.$axios.get(
      `${BASE_URL}/goods?loginId=${state.currentLoginId}`
    );
    commit("SET_GOODSFAVORITE", res.data);
  },

  async addPlanFavorite({ commit, state }, planId) {
    try {
      const allPlanRes = await this.$axios.get(`${BASE_URL}/plan`);
      const allPlan = allPlanRes.data;

      const maxId = allPlan.length
        ? Math.max(...allPlan.map((plan) => parseInt(plan.id, 10)))
        : 0; //빼고
      const addPlan = {
        id: String(maxId + 1),
        loginId: state.currentLoginId,
        mkdpNo: planId,
      };

      const res = await this.$axios.post(`${BASE_URL}/plan`, addPlan);
      commit("ADD_PLANFAVORITE", res.data);
    } catch (error) {
      console.error("Error adding plan:", error);
      throw error;
    }
  },

  async addGoodsFavorite({ commit, state }, goodsNo) {
    try {
      const allGoodsRes = await this.$axios.get(`${BASE_URL}/goods`);
      const allGoods = allGoodsRes.data;

      const maxId = allGoods.length
        ? Math.max(...allGoods.map((good) => parseInt(good.id, 10)))
        : 0;

      const addGood = {
        id: String(maxId + 1),
        loginId: state.currentLoginId,
        goodsNo: goodsNo,
      };

      const res = await this.$axios.post(`${BASE_URL}/goods`, addGood);
      commit("ADD_GOODSFAVORITE", res.data);
    } catch (error) {
      console.error("Error adding good:", error);
      throw error;
    }
  },

  async deletePlanFavorite({ commit, state }, planId) {
    try {
      const planToRemove = state.planFavorite.find(
        (plan) => plan.mkdpNo === planId
      );

      await this.$axios.delete(`${BASE_URL}/plan/${planToRemove.id}`);
      commit("DELETE_PLANFAVORITE", planId);
    } catch (error) {
      console.error("Error removing plan:", error);
      throw error;
    }
  },

  async deleteGoodsFavorite({ commit, state }, goodsNo) {
    try {
      const goodsToRemove = state.goodsFavorite.find(
        (good) => good.goodsNo === goodsNo
      );

      await this.$axios.delete(`${BASE_URL}/goods/${goodsToRemove.id}`);
      commit("DELETE_GOODSFAVORITE", goodsNo);
    } catch (error) {
      console.error("Error removing good:", error);
      throw error;
    }
  },
};

export const getters = {
  getPlanFavorite: function (state) {
    const map = new Map();

    state.planFavorite.forEach((item) => {
      !map.has(item.mkdpNo) ? map.set(item.mkdpNo, item) : "";
    });
    return map;
  },
  getGoodsFavorite: function (state) {
    const map = new Map();

    state.goodsFavorite.forEach((item) => {
      !map.has(item.goodsNo) ? map.set(item.goodsNo, item) : "";
    });
    return map;
  },
};
