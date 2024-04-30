<template>
	 <div class="pg-plan">
		<LinkList v-for="(corner, index) in planGroup" :key="index" />
  </div>
</template>
<script>
import {camelCase} from 'lodash'
export default {
	layout : 'Plan',
	async asyncData({$axios}) {
		const planGroupData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/group")
		return {
			planGroup : planGroupData?.data ?? []
		}
	}	
}
</script>