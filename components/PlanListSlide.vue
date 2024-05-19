<template>
	<div class="box-slide type-card">
		<swiper class="swiper" :option="planSwiperOptions">
			<swiper-slide v-for="(planData ,planIndex) in detailData" v-bind:key="`${planIndex}_${planData.id}`" class="plan-item">
				<a :href="`plan/${planData.mkdpNo}`">
					<div class="img-box">
						<img :src="`https://img-stg.x2bee.com/${planData.imageList[0].bnrImgPathNm}`" :alt="`${planData.mkdpNm} 이미지`"/>
					</div>
					<div class="btn-area">
						<button type="button" class="btn-like" :class="{on : isActive}" @click="evtLike">좋아요</button>
						<button type="button" class="btn-share">share</button>
					</div>
					<p class="name">{{ planData.mkdpNm }}</p>
					<p class="desc">{{ planData.introConts }}</p>
					<div class="date">
						<span>{{date(planData.startDate)}}</span>~<span>{{date(planData.endDate)}}</span>
					</div>
				</a>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
	name: "PlanListSlide",
	components: {
    Swiper,
    SwiperSlide,
  },
	props: {
		detailData: {
			type: Array,
			defaultValue: undefined,
		},
  },
  data() {
	return {
			rangeDate : null,
			isActive: false,
			planSwiperOptions: {
        slidesPerView: 4,
        spaceBetween: 12,
        loop: false,
        navigation: {
          prevEl: ".swiper-button-prev.banner",
          nextEl: ".swiper-button-next.banner",
        },
      },
		};
  },
  created() {		
	},
  mounted() {},
  methods: {
		date(date) {
			const rangeDate = new Date(date)
			return (
				rangeDate.getFullYear() + "-" +
				(rangeDate.getMonth() + 1).toString().padStart(2,'0') + "-" +
				rangeDate.getDate().toString().padStart(2,'0')
			)
		},
		evtLike :function() {
			this.isActive = !this.isActive;
		}
	},
  computed: {				
  }
};
</script>
<style lang="scss" scoped>
.plan-item {
	overflow:hidden;
	a {
		display: block;
	}
	.img-box {
		position:relative;
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

