<template>	
	<div class="item">
		<a href="javascript:void(0)">
			<div class="img-box">
				<img :src="`https://img-stg.x2bee.com/${pdData.goodsRepImgPathNm}`" :alt="`${pdData.goodsNm}`"/>
			</div>
			<div class="btn-area">

			</div>
			<p class="name">{{ pdData.goodsNm }}</p>
			<!-- rcntSalePrc(원래 가격)과 salePrc(세일가격) 차이가 있을 경우 노출  -->
			<p class="recent-price" v-if="pdData.rcntSalePrc != pdData.salePrc">{{ pdData.rcntSalePrc }}</p>
			<span class="percent" v-if="pdData.rcntSalePrc != pdData.salePrc">{{ pdData.dcRate }}</span>
			<span class="price"><em>{{ pdData.salePrc }}</em>원</span>
		</a>
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
	name: "PlanProductItem",
	props: {
		productData : {
			type:Object,
			defaultValue:undefined
		},
		pdData : {
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
<style lang="scss" scoped>
	.item {
		.img-box {
			position:relative;
			width:282px;
			height:282px;
			img {
				position:absolute;
				top:0; left:0;
				display: block;
				width:100%;
				height:100%;
				object-fit: cover;
			}
		}
	}
</style>

