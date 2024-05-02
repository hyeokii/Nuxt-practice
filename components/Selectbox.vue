<template>
  <div class="custom-select-wrapper">
    <div class="custom-select-list">
      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(1)">
          {{ selected1 }}
        </div>
        <ul class="select-options" v-show="isOpen1">
          <li
            v-for="option in options1"
            :key="option"
            @click="selectOption(option, 1)"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown(2)">
          {{ selected2 }}
        </div>
        <ul class="select-options" v-show="isOpen2">
          <li
            v-for="option in options2"
            :key="option"
            @click="selectOption(option, 2)"
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
      isOpen1: false,
      isOpen2: false,
      selected1: "선택하세요",
      selected2: "최신순",
      options1: ["옵션 1", "옵션 2", "옵션 3"],
      options2: ["최신순", "마감순"],
    };
  },
  methods: {
    toggleDropdown(selectBoxNumber) {
      if (selectBoxNumber === 1) {
        this.isOpen1 = !this.isOpen1;
        this.isOpen2 = false;
      } else if (selectBoxNumber === 2) {
        this.isOpen2 = !this.isOpen2;
        this.isOpen1 = false;
      }
    },
    selectOption(option, selectBoxNumber) {
      if (selectBoxNumber === 1) {
        this.selected1 = option;
        this.$store.commit("setSelectedBrandOption", this.selected1);
        this.isOpen1 = false;
      } else if (selectBoxNumber === 2) {
        this.selected2 = option;
        this.$store.commit("setSelectedTimeOption", this.selected2);
        this.isOpen2 = false;
      }
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
