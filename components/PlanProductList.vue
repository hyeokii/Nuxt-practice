<template>	
	<div class="product-list" v-if="isView">
		<slot></slot>
	</div>
</template>
<!--  
	saleStatCd
	10: 판매중
	20: 품절
	40: 판매종료
-->
<script>
export default {
	name: "PlanProductList",
	props: {
		detailData : {
			type:Object,
			defaultValut: undefined
		}
	},
	data() {		
		return {
		};
	},
	created() {},
	mounted() {		
	},
	methods: {		
	},
	computed: {
		isView() {
			return this.detailData
		}
	}
};
</script>
<style lang="scss" scoped>
	.product-list {
		display:grid;
		grid-template-columns: repeat(4,1fr);
		gap:40px 24px;
		margin-top:20px;
	}
</style>

