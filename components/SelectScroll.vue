<template>
  <div class="custom-select-wrapper">
    <!-- <select
      name="section"
      id="section"
      @change="handleRef"
      class="custom-select"
      required
    >
      <option value="" class="option-default" disabled selected>
        선택해주세요
      </option>
      <option v-for="item in data" :key="item.divobjNo" :value="item.divobjNm">
        {{ item.divobjNm }}
      </option>
    </select> -->

    <div class="custom-select-list" ref="dropdown">
      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown()">
          {{ sortSelected }}
        </div>
        <ul class="select-options" v-show="sortOpen">
          <li
            v-for="item in data"
            :key="item.divobjNo"
            @click="handleRef(item.divobjNm)"
          >
            {{ item.divobjNm }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },

  data() {
    return {
      sortOpen: false,
      sortSelected: "선택해주세요",
    };
  },

  methods: {
    toggleDropdown() {
      if (!this.sortOpen) {
        document.addEventListener("click", this.handleClickOutside);
      } else {
        console.log("destroy");
        document.removeEventListener("click", this.handleClickOutside);
      }
      this.sortOpen = !this.sortOpen;
    },
    handleRef(value) {
      this.$emit("getRef", value);
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.sortOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .select-wrap {
//   display: flex;
//   justify-content: end;
//   padding-bottom: 20px;
//   .custom-select {
//     width: 320px;
//     padding: 10px 20px;
//     border: 1px solid #ccc;
//     cursor: pointer;
//     position: relative;

//     .option-default {
//       display: none;
//     }
//   }
// }

.custom-select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  .custom-select-list {
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

        &:after {
          content: "";
          position: absolute;
          top: 40%;
          right: 10%;
          width: 10px;
          height: 10px;
          border-top: 2px solid black;
          border-left: 2px solid black;
          transform: rotate(-135deg);
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
          }
        }
      }
    }
  }
}
</style>
