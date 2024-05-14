<template>
  <div class="select-wrap">
    <select
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
    </select>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },

  methods: {
    handleRef(event) {
      this.$emit("getRef", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrap {
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
  .custom-select {
    width: 320px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    position: relative;

    option {
      padding: 10px 20px;
    }

    .option-default {
      display: none;
    }
  }
}
</style>
