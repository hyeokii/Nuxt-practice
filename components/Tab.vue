<template>
  <div class="tabs">
    <button
      type="button"
      v-for="(item, key) in tab"
      :key="`tab-${key}`"
      :class="{ on: key === currentTab }"
      @click="$emit('tabClicked', key)"
    >
      {{ item.name }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Tab",
  props: {
    tab: {
      type: Array,
      required: true,
    },
    currentTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    currentTab: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  }
};
</script>
<style scoped lang="scss">
.tabs {
  display: flex;
  align-items: center;
  width: 100%;
  button {
    flex: 1;
    position: relative;
    display: block;
    padding: 8px 12px;
    width: 100%;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    &.on {
      font-weight: bold;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid black;
      }
    }
  }
  .section-title + & {
    margin-top: 40px;
  }
}
</style>
