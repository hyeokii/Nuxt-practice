<template>
  <div class="selectContainer">
    <div class="custom-select-wrapper">
      <select class="custom-select" v-model="newSortType" @change="sortGoods">
        <option value="10" :selected="newSortType === '10'">최신순</option>
        <option value="20" :selected="newSortType === '20'">판매 많은순</option>
        <option value="30" :selected="newSortType === '30'">높은 가격순</option>
        <option value="40" :selected="newSortType === '40'">낮은 가격순</option>
        <option value="50" :selected="newSortType === '50'">
          상품평 많은순
        </option>
      </select>
      <span class="arrow">&#9660;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sortType: { type: String, required: true },
  },

  data() {
    return {
      newSortType: this.sortType,
    };
  },

  methods: {
    async sortGoods() {
      // selectBox 눌렀을 때 실행
      this.$emit("updateGoodsList", this.newSortType);
    },
  },
};
</script>

<style lang="scss" scoped>
.selectContainer {
  width: 1240px;
  margin: 2rem 0;
  display: flex;
  justify-content: end;
}

.custom-select-wrapper {
  position: relative;
  display: inline-block;
}

.custom-select {
  cursor: pointer;
  padding: 0.5rem 3rem;
  border: 1px solid #dfdfdf;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1.2rem;
}
</style>
