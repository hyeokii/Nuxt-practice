<template>
  <button type="button" @click="addPlanData()">{{linkListData.dispGrpNm}}</button>
</template>
<script>

import planMixins from "@/mixins/plan-mixins";
export default {
  name: "LinkList",
  mixins:[planMixins],
  props: {
    linkListData: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    addPlanData() {
      this.$router.push({path:"/plan",query:{pageNo:1,groupNo: this.linkListData.dispGrpNo}});
      // this.$router.
    }
  },
  computed: {
  }
};
</script>
<style lang="scss">
  .link-list {
    display: flex;
    justify-content: flex-start;
    gap:0 40px;
  }
</style>

