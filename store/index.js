export const state = () => ({
  selectedBrandOption: null,
  selectedTimeOption: "recent",
});

export const mutations = {
  setSelectedBrandOption(state, option) {
    state.selectedBrandOption = option;
  },
  setSelectedTimeOption(state, option) {
    if (option === "최신순") {
      state.selectedTimeOption = "recent";
    } else if (option === "마감순") {
      state.selectedTimeOption = "close";
    }
  },
};
