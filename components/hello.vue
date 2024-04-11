<template>
  <div :class="['box', {blue: Boolean(testName)}]" v-html="value">
  </div>
</template>
<script>
export default {
  name: 'helloComponent',
  props: {
    testName: {
      type: String,
      default: null
    }
  },
  computed: {
    value() {
      return `<div>${this.testName ? `최근 클릭한 사용자: ${this.testName}` : '클릭한 사용자가 없습니다.'}</div>`
    }
  }
}
</script>
<style lang="scss">
.box {
  border: 1px solid red;
  &.blue {
    border: 1px solid blue;
  }
}
</style>

