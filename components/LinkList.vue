<template>
	<button type="button" :class="{on : dispGrpNo === linkListData.dispGrpNo}" @click="$emit('getPlanListData', 1, linkListData.dispGrpNo)">{{linkListData.dispGrpNm}}</button>
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
		dispGrpNo : {
			type: String,
			defaultValue:undefined
		}
	},
	data() {
		return {
			// isActive:false,
		};
	},
	created() {},
	mounted() {},
	methods: {},
	computed: {}
};
</script>
<style lang="scss">
	.link-list {
		display: flex;
		justify-content: flex-start;
		gap:0 40px;
	}
</style>

