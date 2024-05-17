<template>
	<div class="select">
		<select>
			<slot></slot>
		</select>
	</div>
</template>
<script>

export default {
	name: "SelectBox",
	props: {
		planData : {
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
	},
	methods: {		
	},
	computed: {}
};
</script>
<style lang="scss">
	.select {
		margin:20px 0 0 auto;
		width:320px;		
	}
</style>

