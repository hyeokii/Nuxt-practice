<template>	
	<div :class="[pdData.saleStatCd === '20' ? 'soldout' : '']" class="item">
		<a href="javascript:void(0)">
			<div class="img-box">
				<img :src="`https://img-stg.x2bee.com/${pdData.goodsRepImgPathNm}`" :alt="`${pdData.goodsNm}`"/>
			</div>
			<div class="btn-area">

			</div>
			<p class="name">{{ pdData.goodsNm }}</p>
			<!-- rcntSalePrc(원래 가격)과 salePrc(세일가격) 차이가 있을 경우 노출  -->
			<p class="recent-price" v-if="pdData.rcntSalePrc != pdData.salePrc">{{ pdData.rcntSalePrc }}</p>
			<span class="percent" v-if="pdData.rcntSalePrc != pdData.salePrc">{{ pdData.dcRate }}%</span>
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
	}
};
</script>
<style lang="scss" scoped>
	.item {
		width:282px;
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
		.name {
			margin-top:4px;
			font-size:14px;
			line-height:20px;
		}
		.recent-price {
			margin-top:4px;
			font-size:12px;
			width:100%;
			line-height:16px;
			text-decoration:line-through;
			color:#767676;
		}
		.percent {
			margin-right:4px;
			color:#f9482a;
			font-weight: bold;
			font-size:14px;
		}
		.price {
			em {
					font-weight: bold;
				}			
				font-size:14px;
		}
		&.soldout {
			.img-box {
				&::after {
					content:'품절';
					position:absolute;
					left:0;
					top:0;
					width:100%;
					height:100%;
					text-align:center;
					line-height:282px;
					color:white;
					background:rgba(0,0,0,0.3);
				}
			}
		}
	}
</style>

