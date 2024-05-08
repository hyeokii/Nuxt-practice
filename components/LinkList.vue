<template>
	<button type="button" @click="$emit('getPlanListData', 1, linkListData.dispGrpNo)" :class="[active , 'btn-link']">{{linkListData.dispGrpNm}}</button>
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

