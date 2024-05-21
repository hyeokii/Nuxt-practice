<template>
  <div class="custom-select-wrapper">
    <div class="custom-select-list" ref="dropdown">
      <div class="custom-select">
        <div class="select-styled" @click="toggleDropdown()">
          {{ sortSelected }}
        </div>
        <ul class="select-options" v-show="sortOpen">
          <li
            v-for="(value, key) in options"
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
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    sortOption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sortOpen: false,
      sortSelected: "최신순",
    };
  },
  created() {
    for (const key in this.options) {
      if (key === this.sortOption) {
        this.sortSelected = this.options[key];
      }
    }
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
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.sortOpen = false;
        document.removeEventListener("click", this.handleClickOutside);
      }
    },

    selectSort(key) {
      this.sortSelected = this.options[key];
      this.$emit("select-box", key);
      this.sortOpen = false;
      document.removeEventListener("click", this.handleClickOutside);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;
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
