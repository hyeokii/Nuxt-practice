<template>
	<div class="nodata">
		<p class="text">진행중인 기획전이 없습니다.</p>
	</div>
</template>
<script>


export default {
	name: "Nodata",
	
	props: {},
	data() {return {}},
	created() {},
	mounted() {},
	methods: {},
	computed: {
		
	}
};
</script>

<style lang="scss">
	.nodata {
		padding:10px;
		text-align:center;
		.text {
			margin-bottom:0;
			color:#767676;
			line-height:24px;
			font-size:16px;
			&::before{
				content:'';
				display:block;
				margin:0 auto;
				width:48px;
				height:48px;
				background:url('https://fo.x2bee.com/images/icons/ico_warning.svg') no-repeat;
			}
		}
	}
</style>

