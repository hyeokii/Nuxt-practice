<template>
	<div class="pg-plan">
		<h2>기획전</h2>
		<div class="like-btn-area">
			<button type="button" class="btn-like" :class="{on : isActive}" @click="evtLike">좋아요</button >
			<!-- <button type="button" class="btn-like" @click="evtLike">좋아요</button > -->
			<button type="button" class="btn-share">share</button>
		</div>
		<PlanHtmlBox :detailData="planData.titleHtml" />
		<SelectBox>
			<option v-for="(planData, planIndex) in planData.planDivObjList" v-bind:key="`${planIndex}_${planData.id}`">{{ planData.divobjNm }}</option>
		</SelectBox>
		<PlanSection v-for="(detailData, detailIndex) in planDetail" v-bind:key="`${detailData}_${detailIndex.id}`" :detailData="detailData" :mkdpNo="planData.mkdpNo"/>
		<PlanListSlide :detailData="recentPlanList"/>
  </div>
</template>
<script>
import apiData from "@/api/apiData";
export default {
	path: "/detail/:mkdpNo",
	layout : 'PlanDetail',
	async asyncData({$axios,route}) {
		const planDetailData = await apiData.getplanDetail(route.params.detail);	
		return { 
			planData:planDetailData?.data , // 기획전 기본 데이터
			planDetail:planDetailData?.data?.planDivObjList?? [], // 각 기획전 data
			recentPlanList : planDetailData?.data.recentPlanList ?? [],
		}
	},
	created() {		
	},
	mounted() {		
	},
	data() {
		return {				
			planData : [],
			planDetail : [],
			recentPlanList: [],
			isActive: false
		};
	},
	computed : {
		
	},
	methods : {
		evtLike :function() {
			this.isActive = !this.isActive;
		},	
	}
}
</script>

<style lang="scss" scoped>
	.pg-plan {
		padding:40px;
		margin:0 auto;
		width:1280px;
		h2 {
			text-align: center;
			font-size:36px;
			font-weight:400;
		}
	}
	.btn-area {
		display:flex;
		justify-content: flex-end;
		margin-top:8px;
		gap:0 12px;
		button {
			font-size:0;				
		}
		.btn-like {
			width:20px;
			height:20px;
			background:url('https://fo.x2bee.com/images/icons/like.svg') no-repeat;
			&.on {
				background:url('https://fo.x2bee.com/images/icons/like_active.svg') no-repeat;
			}
		}
		.btn-share {
			width:20px;
			height:20px;
			background:url('https://fo.x2bee.com/images/icons/ico_share02.svg') no-repeat;
		}
	}
</style>c