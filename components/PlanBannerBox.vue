<template>
	<div class="img-box" v-if="isView">
		<img :src="`https://img-stg.x2bee.com/${imgData}`" :alt="`${altData}`">
	</div>
</template>

<script>
export default {
	name: "PlanHtmlBox",
	props: {
		imgData : {
			type:String,
			defaultValue : undefined
		},
		altData : {
			type:String,
			default:undefined
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
			return(this.imgData ?? []).length > 0
		}
	}
};
</script>
<style lang="scss">
	.img-box {
		margin-top:40px;
		width:1200px;
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

