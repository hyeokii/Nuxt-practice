<template>	
	<div class="product-list" v-if="isView">
		<PlanProductItem v-for="(pdData,pdIndex) in goodsList" v-bind:key="`${pdIndex}_${pdData.id}`" :pdData="pdData"/>
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
		goodsList : {
			type:Array,
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
			return this.goodsList ?? []
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

