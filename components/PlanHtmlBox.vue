<template>
	<div class="html-box" v-html="detailData">
	</div>
</template>

<script>
export default {
	name: "PlanHtmlBox",
	props: {
		detailData : {
			type:String,
			defaultValue : undefined
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
	.html-box {		
		margin-top:40px;
		width:1200px;
		.btn-area + & {
			margin-top:20px;
		}
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

