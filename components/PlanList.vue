<template>
  <div class="plan-item">
		<a href="javascript:void(0)">
			<div class="img-box">
				<img :src="`https://img-stg.x2bee.com/${planListData.imageList[0].bnrImgPathNm}`" :alt="`${planListData.mkdpNm} 이미지`"/>
			</div>
			<div class="btn-area">
				<button type="button">like</button>
				<button type="button">share</button>
			</div>
			<p class="name">{{ planListData.mkdpNm }}</p>
			<p class="desc">{{ planListData.introConts }}</p>
			<div class="date">
				<span>{{ planListData.startDate }}</span>~<span>{{ planListData.endDate }}</span>
			</div>
		</a>
	</div>
</template>
<script>

import planMixins from "@/mixins/plan-mixins";
export default {
  name: "LinkList",
  mixins:[planMixins],
  props: {
    planListData: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    
  },
  computed: {
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
		text-wrap:nowrap;
		text-overflow: ellipsis;
	}
	.date {
		// color:;
	}
}
</style>

