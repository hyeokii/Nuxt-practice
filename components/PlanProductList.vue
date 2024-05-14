<template>
	<div class="product-list">
		<PlanProductItem v-for="(pdData,pdIndex) in productData" v-bind:key="`${pdIndex}_${pdData.id}`" :pdData="pdData"/>
	</div>
</template>
<!--  
	saleStatCd
	10: 판매중
	20: 품절
	40: 판매종료
-->
<script>
import PlanProductItem from "./PlanProductItem"
export default {
	name: "PlanProductList",
	components: {
		PlanProductItem,
	},
	props: {
		productData : {
			type:Object,
			defaultValue:undefined
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
			
		}
	}
};
</script>
<style lang="scss">
	.item {
		
	}
</style>

