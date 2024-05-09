<template>
  <div class="custom-select-wrapper">
    <div class="custom-select-list">
      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(1)">
          {{ brandSelected }}
        </div>
        <ul class="select-options" v-show="brandOpen">
          <li
            v-for="option in brandOption"
            :key="option"
            @click="selectBrand(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(2)">
          {{ sortSelected }}
        </div>
        <ul class="select-options" v-show="sortOpen">
          <li
            v-for="option in sortOption"
            :key="option"
            @click="selectSort(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandOpen: false,
      sortOpen: false,
      brandSelected: "선택하세요",
      sortSelected: "최신순",
      brandOption: ["옵션 1", "옵션 2", "옵션 3"],
      sortOption: ["최신순", "마감순"],
    };
  },
  computed: {},
  async fetch() {
    if (this.$route.query.sortOption === "close") {
      this.sortSelected = "마감순";
    } else {
      this.sortSelected = "최신순";
    }
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
    selectSort(option) {
      if (option === "최신순") {
        this.sortSelected = option;
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            sortOption: "recent",
          },
        });
      } else if (option === "마감순") {
        this.sortSelected = option;
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            sortOption: "close",
          },
        });
      }
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
