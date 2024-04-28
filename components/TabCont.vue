<template>
  <div class="tab-cont" v-if="tabNumber===currentTab">
    <slot ></slot>
  </div>
</template>
<script>
export default {
  name: "TabCont",
  props: {
    tabCont: {
      type: Array,
      required: false,
    },
    tabNumber: {
      type: Number,
      default: 0,
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
  computed: {    
  }
};
</script>
<style scoped lang="scss">
.tab-cont {
  padding-top:40px;
}
</style>
