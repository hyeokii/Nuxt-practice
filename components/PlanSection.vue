<template>
	<section class="box-section">
		<PlanBannerBox :detailData="detailData" />
		<PlanSortArea @getSelectData="sortChangeEvent"/>
		<PlanProductList :goodsList="goodsList"/>
		<PlanCoupon :detailData="detailData"/>
	</section>
</template>
<script>
import apiData from "@/api/apiData";
export default {
	name: "planSection",
	props: {
		detailData: {
			type:Object,
			defaultValue:undefined
		},
		mkdpNo : {
			type:Object,
			defaultValue:undefined
		}
	},
	data() {		
		return {
			goodsList:[]
		};
	},
	created() {},
	mounted() {
		this.goodsList = this.detailData.goodsList
	},
	methods: {		
		async getPlanDetailGoodsList(sortType) {
			const planResultData = await apiData.getPlanDetailResult(this.mkdpNo, this.detailData.divobjNo, sortType);
			console.log(planResultData);
			this.goodsList = planResultData.data[0].goodsList;
		},
		//정렬 select
		sortChangeEvent(sortType) { // sortType을 받아서 getPlanList 에 넣어주기
			this.getPlanDetailGoodsList(sortType)
		},
	},
	computed: {}
};
</script>
<style lang="scss">
	.box-section {
		margin:40px auto 0;
	}
</style>

