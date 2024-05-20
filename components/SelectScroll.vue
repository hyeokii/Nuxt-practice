<template>
  <div class="custom-select-wrapper">
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
        document.removeEventListener("click", this.handleClickOutside);
      }
      this.sortOpen = !this.sortOpen;
    },
    handleRef(value) {
      this.sortSelected = value;
      this.$emit("getRef", value);
      this.sortOpen = false;
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
.custom-select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  .custom-select-list {
    display: flex;
    gap: 10px;
    justify-content: end;
    .custom-select {
      width: 200px;
      .select-styled {
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
        width: 200px;
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
