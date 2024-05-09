<template>
	 <div class="pg-plan">
		<div class="link-list">
			<button type="button" @click="getPlanList()" :class="{on : dispGrpNo === undefined }">전체</button>
			<LinkList v-for="(linkListData, linkListIndex) in planGroup" :key="linkListIndex" :linkListData="linkListData" @getPlanListData="getPlanList" :dispGrpNo="dispGrpNo"/>
		</div>
		<SortArea @getSelectData="sortChangeEvent"/>
		<div class="cont">
			<div class="plan-list">
				<PlanList v-for="(planListData, planListIndex) in planList" :planListData="planListData" :key="planListIndex"/>
			</div>
			<Nodata v-if="isView"/>
			<button v-if="isMoreView" type="button" class="btn-more" @click="moreClickEvent">기획전 더보기</button>
		</div>
  </div>
</template>
<script>

export default {
	layout : 'Plan',
	async asyncData({$axios,route}) {
		const pageNo = 1; // 페이지 번호 기본 값 
		const sortType = 'recent'; // sort type 기본 값
		const planGroupData = await $axios.get("https://gw.x2bee.com/api/display/v1/plan/group")
		const planSearchData = {
			dispMediaCd: "99",	// 전시매체코드(고정)
			sortType: sortType,	// recent, close 정렬코드
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
			sortType : sortType,
			dispGrpNo : route.query.groupNo
		}	
	}	,
	created() {
		
	},
	mounted() {		
	},
	data() {
		return {	
			planGroup: [], 
			planList:[], 
			totalPageCount:0, 
			pageNo: 0,  
			dispGrpNo:0,
			sortType:'recent'
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
		async getPlanList(pageNo, groupNo, sortType) {
			if(pageNo === null || pageNo === undefined) pageNo = 1;
			
			if(groupNo !== this.dispGrpNo || pageNo === 1) { // groupNo 랑 dispGrpNo랑 다를 시
				this.planList = [] // planList 초기화
			}

			if(sortType) {
				this.planList = [] // planList 초기화
				this.sortType = sortType 
			}

			this.$router.push({path:"/plan",query:{pageNo:pageNo, groupNo: groupNo}});			
			const planSearchData = {
				dispMediaCd: "99",	// 전시매체코드(고정)
				sortType: this.sortType,	// recent, close 정렬코드
				pageNo: pageNo,	// 페이지 번호
				pageSize: 9,	// 페이지사이즈 (고정)
				progressYn: "Y",	// 진행중 여부
				brandNo: "",	// 브랜드 번호
				dispGrpNo: groupNo	// 기획전그룹번호 (없으면 전체)
			};

			const planResultData = await this.$axios.get("https://gw.x2bee.com/api/display/v1/plan/planList", {params: planSearchData});
			this.pageNo = pageNo
			this.totalPageCount = Math.ceil(planResultData?.data?.payload?.totalCount/9);			
			// planInfoList를 따로 저장한다.
			let planInfoList = planResultData?.data?.payload?.planInfoList;
			// planInfoList 루프를 돌린다.
			for(let index = 0; index < planInfoList.length; ++index) {
					const data = planInfoList[index];
					this.planList.push(data);
			}
			this.dispGrpNo = groupNo; // groupNo 저장
		},

		//더보기 버튼 이벤트
		moreClickEvent() { 
			this.getPlanList(this.pageNo + 1, this.dispGrpNo)
		},

		//정렬 select
		sortChangeEvent(sortType) { // sortType을 받아서 getPlanList 에 넣어주기
			this.getPlanList(1, this.dispGrpNo, sortType)
		},

		// link 버튼 이벤트 
		linkBtnEvent() {
			
		}
	}
}
</script>

<style lang="scss" scoped>
.pg-plan {
	padding:40px;
	margin:0 auto;
	width:1280px;
}
.btn-more {
	display: block;
	margin:40px auto 0;
	padding:10px;
	width:384px;
	height:40px;
	border:1px solid #E5E5E5;
	font-size:12px;
	&::after {
		content: '';
		display: inline-block;
		margin-left:4px;
		width:12px;
		height:12px;
		vertical-align: middle;
		background: url('https://fo.x2bee.com/images/icons/ico_arrow12.svg') no-repeat;
	}
}

.link-list {
	button.on {
		font-weight:bold;
	}
}
</style>