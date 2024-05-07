<template>
  <div class="product-list">
		<div class="product" v-for="(data,index) in productList.contentInfoList[1].productList" v-bind:key="index">
			<a :href="`javascript:void(0)`" @click="pdLink(data.goodsNm)">
				<div class="img-box">
					<img :src="`https://img-stg.x2bee.com/${data.goodsRepImgPathNm}`" alt="img"/>
				</div>
				<div class="text-box">
					<p class="name">{{ data.goodsNm }}</p>
					<p class="sale">{{ data.rcntSalePrc }}</p>
					<div class="discount">
						<span class="percent"><em>{{ data.dcRate }}</em>%</span>
						<span class="price"><em>{{ data.salePrc }}</em>원</span>
					</div>
				</div>
			</a>
		</div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  props: {
	productList: {
	  type: Object,
	  required: true,
	},
  },
  data() {
	return {};
  },
  created() {},
  mounted() {},
  methods: {
	pdLink(data) {
		alert(`${data}으로 이동`)
	},
  },
  computed: {},
};
</script>
<style scoped lang="scss">
.product-list {  
	display:grid;
	grid-template-columns: repeat(4, 1fr);
	gap:40px 24px;
}
.product {
	a {
		display: block;
	}
	.img-box {
		position:relative;
		width:302px;
		height:302px;
		&::after {
			content: '';
			display: block;
			padding-bottom:100%;
		}
		img {
			position:absolute;
			top:0; left:0;
			display: block;
			width:100%;
			height:100%;
			object-fit: cover;
		}
	}
	.text-box {
		margin-top:12px;
		.name {
			font-size:14px;
		}
		.sale {
			text-decoration:line-through;
			color:#767676;
			font-size:12px;
		}
		.discount {
			display:flex;
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
		}
	}
}
</style>
