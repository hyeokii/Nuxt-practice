<template>
	<div class="html-box" v-html="htmlCode" v-if="isView">
	</div>
</template>

<script>
export default {
	name: "PlanHtmlBox",
	props: {
		htmlCode : {
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
			return(this.htmlCode ?? []).length > 0
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

