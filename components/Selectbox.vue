<template>
  <div class="selectContainer">
    <div class="custom-select-wrapper">
      <select
        class="custom-select"
        v-model="selectedOption"
        @change="handleOptionChange"
      >
        <option
          v-if="defaultOption"
          :value="defaultOption.value"
          disabled
          hidden
        >
          {{ defaultOption.label }}
        </option>
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :selected="selectedOption === option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="arrow">&#9660;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true }, // 옵션
    defaultOption: { type: Object, required: true }, // 디폴트 옵션
  },

  data() {
    return {
      selectedOption:
        this.$router.currentRoute.query.sortType ?? this.defaultOption.value,
    };
  },

  methods: {
    handleOptionChange() {
      this.$emit("change", this.selectedOption);
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
