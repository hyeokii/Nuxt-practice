<template>
  <div class="custom-select-wrapper">
    <div class="custom-select">
      <div class="select-styled" @click="toggleDropdown()">
        {{ detailSortSelected }}
      </div>
      <ul class="select-options" v-show="sortOpen">
        <li
          v-for="(value, key) in detailSortOptionList"
          :key="key"
          @click="selectDetailSort(key)"
        >
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortOpen: false,
      detailSortSelected: "최신순",
      detailSortOptionList: {
        10: "최신순",
        20: "판매 많은순",
        30: "높은 가격순",
        40: "낮은 가격순",
        50: "상품평 많은순",
      },
    };
  },

  methods: {
    toggleDropdown() {
      this.sortOpen = !this.sortOpen;
    },
    selectDetailSort(key) {
      this.detailSortSelected = this.detailSortOptionList[key];
      this.$emit("planDetail-event", key);
      this.sortOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: end;
  .custom-select {
    width: 160px;
    .select-styled {
      width: 160px;
      padding: 10px 20px;
      border: 1px solid #ccc;
      cursor: pointer;
      background-color: #fff;
      position: relative;
      font-size: 14px;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 10%;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #000 transparent transparent transparent;
        pointer-events: none;
        margin-top: -3px;
      }
    }

    .select-options {
      width: 160px;
      position: absolute;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid #ccc;
      background-color: #fff;
      z-index: 1;

      li {
        padding: 10px 20px;
        cursor: pointer;

        &:hover {
          background-color: #f4f4f4;
          font-weight: bold;
        }
      }
    }
  }
}
@media ($desktop) {
  .custom-select-wrapper {
    width: 1200px;
  }
}
</style>
