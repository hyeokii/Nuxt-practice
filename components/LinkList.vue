<template>
  <div class="link-list">
    <template v-if="index === 0">
      <button type="button" @click="addPlanData()">전체</button>
    </template>
		<button type="button" @click="addPlanData()">{{linkListData.dispGrpNm}}</button>
  </div>
</template>
<script>
export default {
  name: "LinkList",
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
    }
  },
  computed: {
  }
};
</script>
<style scoped lang="scss">
</style>

