<template>
	<div class="coupon-box" v-if="isView">
		<a :href="`javascript:void(0)`"  @click="cpLink(detailData.cpnNo)">
			<img :src="`https://img-stg.x2bee.com/${detailData.cpnBnrImgPathNm}`" :alt="`${detailData.cpnNo}쿠폰`">
		</a>
	</div>
</template>
<script>

export default {
	name: "PlanCoupon",
	props: {
		detailData : {
			type:Object,
			defaultValue : undefined
		}	,
	},
	data() {		
		return {
		};
	},
	created() {},
	mounted() {		
	},
	methods: {	
		cpLink(data)	 {
			alert(`${data}쿠폰이 발급되었습니다!`)
		}
	},
	computed: {
		isView() {
			return this.detailData.cpnDnldYn === "Y"
		}
	}
};
</script>
<style lang="scss" scoped>
	.coupon-box {
		margin-top:40px;
		text-align: center;
		a {
			display:inline-block;
		}
	}
</style>

