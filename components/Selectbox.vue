<template>
  <div class="custom-select-wrapper">
    <div class="custom-select-list">
      <!-- <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(1)">
          {{ brandSelected }}
        </div>
        <ul class="select-options" v-show="brandOpen">
          <li @click="selectBrand('All')">브랜드 전체</li>
          <li
            v-for="option in brandList"
            :key="option.brandNo"
            @click="selectBrand(option)"
          >
            {{ option.brandNm }}
          </li>
        </ul>
      </div> -->
      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(2)">
          {{ sortSelected }}
        </div>
        <ul class="select-options" v-show="sortOpen">
          <li
            v-for="(value, key) in sortOptionList"
            :key="key"
            @click="selectSort(key)"
          >
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { getBrandNameList, getBrandList } from "../api";
export default {
  data() {
    return {
      // brandOpen: false,
      sortOpen: false,
      // brandSelected: "브랜드 전체",
      sortSelected: "최신순",
      // brandList: {},
      // brandOption: [],
      sortOptionList: { recent: "최신순", close: "마감순" }, //key value
    };
  },
  computed: {
    sortOption() {
      return this.$route.query.sortOption;
    },
  },

  async fetch() {
    for (const key in this.sortOptionList) {
      console.log(key);
      if (key === this.sortOption) {
        this.sortSelected = this.sortOptionList[key];
      }
    }
    // this.brandList = await getBrandList();
    // this.brandOption = await getBrandNameList();
  },

  methods: {
    toggleDropdown(selectBoxNumber) {
      if (selectBoxNumber === 1) {
        this.brandOpen = !this.brandOpen;
        this.sortOpen = false;
      } else if (selectBoxNumber === 2) {
        this.sortOpen = !this.isOpen2;
        this.brandOpen = false;
      }
    },
    selectSort(key) {
      this.sortSelected = this.sortOptionList[key];
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          sortOption: key,
        },
      });
      this.sortOpen = false;
    },
    // selectBrand(option) {
    //   this.brandSelected = option.brandNm ? option.brandNm : "브랜드 전체";
    //   this.$router.push({
    //     path: this.$route.path,
    //     query: {
    //       ...this.$route.query,
    //       brand: option.brandNo,
    //     },
    //   });
    //   this.brandOpen = false;
    // },
  },
};
</script>

<style lang="scss" scoped>
.custom-select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 100px;
  .custom-select-list {
    display: flex;
    gap: 10px;
    justify-content: end;
    .custom-select {
      width: 140px;
      .select-styled {
        width: 140px;
        padding: 10px 20px;
        border: 1px solid #ccc;
        cursor: pointer;
        background-color: #fff;
        position: relative;

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
        width: 140px;
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
          }
        }
      }
    }
  }
}
@media ($desktop) {
  .custom-select-wrapper {
    width: 1900px;
  }
}
</style>
