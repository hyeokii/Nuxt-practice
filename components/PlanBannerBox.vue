<template>
	<div v-if="isView" class="banner-box">
		<div class="type-html" v-if="detailData.divobjGbCd === '30'" v-html="detailData.htmlFileCont">
		</div>
		<div class="type-img" v-if="detailData.divobjGbCd ==='20'">
			<img :src="`https://img-stg.x2bee.com/${detailData.bnrImgPathNm}`" :alt="`${detailData.cpnNo}`">
		</div> 
		<div class="type-text" v-if="detailData.divobjGbCd ==='10'">
			{{ detailData.textDivobjNm }}
		</div>
	</div>
</template>

<script>
export default {
	name: "PlanBannerBox",
	props: {
		detailData : {
			type:Object,
			defaultValue : undefined
		}
	},
	data() {		
		return {
		};
	},
	created() {},
	mounted() {		
		console.log(this.detailData)
	},
	methods: {		
		
	},
	computed: {
		isView(type, data) {
			return this.detailData.divobjGbCd
		}
	}
};
</script>
<style lang="scss">
	.banner-box {		
		margin-top:40px;
		p {
			margin:0;
		}
		img {
			display: block;
			width:100%;
			height:auto;
		}
	}
</style>

