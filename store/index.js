
export const state = () => ({
  planList : [],
  goodsList : []
});

export const mutations = {
  setPlanList(state, planList) {
    console.log("mutations11111111111")
    console.log(planList)
    console.log("mutations11111111111")
    state.planList = planList
  },
  addPlanList() {

  },
  setGoodsList(state, goodsList) {
    state.goodsList = goodsList
  },
  addGoodsList() {

  }
}