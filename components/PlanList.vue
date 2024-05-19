<template>
  <div class="plan-item">
		<a :href="`plan/${planListData.mkdpNo}`">
			<div class="img-box">
				<img :src="`https://img-stg.x2bee.com/${planListData.imageList[0].bnrImgPathNm}`" :alt="`${planListData.mkdpNm} 이미지`"/>
			</div>
			<div class="btn-area">
				<button type="button" class="btn-like" :class="{on : isActive}" @click="evtLike">좋아요</button >
				<button type="button" class="btn-share">share</button>
			</div>
			<p class="name">{{ planListData.mkdpNm }}</p>
			<p class="desc">{{ planListData.introConts }}</p>
			<div class="date">
				<span>{{date(planListData.startDate)}}</span>~<span>{{date(planListData.endDate)}}</span>
			</div>
		</a>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "LinkList",
	props: {
		planListData: {
			type: Object,
			defaultValue: undefined,
		},
  },
  data() {
	return {
			rangeDate : null,
			isActive: false
		};
  },
  created() {		
	},
  mounted() {
		console.log(this.planList);

		const map = this.planList.reduce((acc, curr) => { // component?? vuex ?? where??
				acc.set(curr.mkdpNo, curr);
				return acc;
		}, new Map());

		const data = map.get(this.planListData.mkdpNo);
		if(data) {
			this.isActive = true;
		}
	},
  methods: {
		date(date) {
			const rangeDate = new Date(date)
			return (
				rangeDate.getFullYear() + "-" +
				(rangeDate.getMonth() + 1).toString().padStart(2,'0') + "-" +
				rangeDate.getDate().toString().padStart(2,'0')
			)
		},
		evtLike :function($event) {
			$event.preventDefault();
			
			this.isActive = !this.isActive;
		}
	},
  computed: {	
		...mapState(["planList"]),			
  }
};
</script>
<style lang="scss">
.plan-list {
	margin-top:20px;
	display:grid;
	grid-template-columns: repeat(3,1fr);
	gap:40px 24px;
}
.plan-item {
	overflow:hidden;
	a {
		display: block;
	}
	.img-box {
		position:relative;
		width: 384px;
		height:384px;
		&::after {
			content: '';
			display: block;
			padding-bottom:100%;
		}
		img {
			position:absolute;
			top:0; left:0;
			width: 100%;
			height:100%;
			object-fit: cover;
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
	.name {
		margin:8px 0 0;
		font-size:14px;
		font-weight:700;
		line-height:20px;
	}
	.desc {
		margin:4px 0 0;
		font-size:12px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.date {
		display: flex;		
		margin-top:2px;
		color:#767676;
		font-size:12px;
	}
}
</style>

