<template>
	 <div class="pg-plan">
		<div class="link-list">
			<button type="button">전체</button>
			<LinkList v-for="(linkListData, linkListIndex) in planGroup" :key="linkListIndex" :linkListData="linkListData"   />
		</div>
		<SortArea/>
		<div class="plan-list">
			<PlanList v-for="(planListData, planListIndex) in planList" :planListData="planListData" :key="planListIndex"/>
			
		</div>
  </div>
</template>
<script>
export default {
	layout : 'Plan',
	async asyncData({$axios,route}) {
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
		const planResultData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/planList", {params: planSearchData});
		return {
			planGroup : planGroupData?.data ?? [],
			planList: planResultData?.data?.payload?.planInfoList ?? [] // 컴포넌트 안에 있어야함
		}	
	}	,
	created() {

	},
	mounted() {

	},
	data() {
		return {			
		};
	},
	computed : {},
	methods : {

	}
}
</script>

<style lang="scss" scoped>
.pg-plan {
	padding:40px;
	margin:0 auto;
	width:1280px;
}
</style>