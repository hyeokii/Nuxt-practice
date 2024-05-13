<template>
  <div class="selectContainer">
    <div class="custom-select-wrapper">
      <select class="custom-select" v-model="newScroll" @change="moveToDiv">
        <option
          v-for="(planDiv, idx) in planDivList"
          :key="`${idx}${planDiv.divobjGbCd}`"
          :value="planDiv.divobjNo"
        >
          {{ planDiv.divobjNm }}
        </option>
      </select>
      <span class="arrow">&#9660;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planDivList: { type: Array, required: true },
    curScroll: { type: String },
  },

  data() {
    return {
      newScroll: this.curScroll,
    };
  },

  methods: {
    async moveToDiv() {
      this.$emit("moveToDiv", this.newScroll);
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
