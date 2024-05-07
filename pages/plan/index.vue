<template>
	 <div class="pg-plan">
		<div class="link-list">
			<button type="button" @click="getPlanList()">전체</button>
			<LinkList v-for="(linkListData, linkListIndex) in planGroup" :key="linkListIndex" :linkListData="linkListData" @getPlanListData="getPlanList"  />
		</div>
		<SortArea/>
		<div class="cont">
			<div class="plan-list">
				<PlanList v-for="(planListData, planListIndex) in planList" :planListData="planListData" :key="planListIndex"/>			
			</div>
			<Nodata v-if="isView"/>
			<button v-if="isMoreView" type="button" class="btn-more" @click="moreClickEvent">더보기</button>
		</div>
  </div>
</template>
<script>
export default {
	layout : 'Plan',
	async asyncData({$axios,route}) {

		const pageNo = 1;
		const planGroupData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/group")
		const planSearchData = {
			dispMediaCd: "99",	// 전시매체코드(고정)
			sortType: "recent",	// recent, close 정렬코드
			pageNo: pageNo,	// 페이지 번호
			pageSize: 9,	// 페이지사이즈 (고정)
			progressYn: "Y",	// 진행중 여부
			brandNo: "",	// 브랜드 번호
			dispGrpNo: route.query.groupNo	// 기획전그룹번호 (없으면 전체)
		};
		const planResultData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/planList", {params: planSearchData});
		
		const totalPageCount = Math.ceil(planResultData?.data?.payload?.totalCount/9);
		
		return {
			planGroup : planGroupData?.data ?? [],
			planList: planResultData?.data?.payload?.planInfoList ?? [], // 컴포넌트 안에 있어야함
			totalPageCount : totalPageCount,
			pageNo : pageNo,
			dispGrpNo : route.query.groupNo
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
	computed : {
		isView() {
			return(this.planList ?? []).length === 0
		},
		isMoreView() {
			return this.pageNo < this.totalPageCount;
		}
	},
	methods : {
		async getPlanList(pageNo, groupNo) {
			// console.log(groupNo);

			if(pageNo === null || pageNo === undefined) pageNo = 1;

			this.$router.push({path:"/plan",query:{pageNo:pageNo, groupNo: groupNo}});
			
			const planSearchData = {
				dispMediaCd: "99",	// 전시매체코드(고정)
				sortType: "recent",	// recent, close 정렬코드
				pageNo: pageNo,	// 페이지 번호
				pageSize: 9,	// 페이지사이즈 (고정)
				progressYn: "Y",	// 진행중 여부
				brandNo: "",	// 브랜드 번호
				dispGrpNo: groupNo	// 기획전그룹번호 (없으면 전체)
			};
			const planResultData = await this.$axios.get("https://gw.x2bee.com/api/display/v1/plan/planList", {params: planSearchData});
			this.pageNo = pageNo
			this.totalPageCount = Math.ceil(planResultData?.data?.payload?.totalCount/9);
			this.planList = planResultData?.data?.payload?.planInfoList ?? [];
			this.dispGrpNo = groupNo;
		},
		moreClickEvent() {
			this.getPlanList(this.pageNo + 1, this.dispGrpNo)
		},
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