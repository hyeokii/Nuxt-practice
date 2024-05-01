<template>
	 <div class="pg-plan">
		<LinkList v-for="(linkListData, linkListIndex) in planGroup" :key="linkListIndex" :linkListData="linkListData"   />
  </div>
</template>
<script>
export default {
	layout : 'Plan',
	async asyncData({$axios,route}) {
		console.log('11111')
		const planGroupData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/group")
		const planSearchData = {
        dispMediaCd: "99",	// 전시매체코드(고정)
        sortType: "recent",	// recent, close 정렬코드
        pageNo: 1,	// 페이지 번호
        pageSize: 9,	// 페이지사이즈 (고정)
        progressYn: "Y",	// 진행중 여부
        brandNo: "",	// 브랜드 번호
        dispGrpNo: route.query.groupNo	// 기획전그룹번호 (없으면 전체)
      };
      const queryString = Object.entries(planSearchData).map(e => e.join('=')).join('&');
      const planResultData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/planList?" + queryString);
			console.log(planResultData)
			console.log(route.query.groupNo)

		return {
			planGroup : planGroupData?.data ?? []
			
		}	
	}	,
	computed : {}
}
</script>