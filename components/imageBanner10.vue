<template>
  <section v-if="isView">
		<div class="box-slide type-card">
			<swiper class="swiper" :options="bannerSwiperOptions">
				<swiper-slide
				v-for="(data, index) in cornerData.setList[0].contentInfoList[0].imageList"
					v-bind:key="`${index}_${data.id}`"
				>
					<a :href="`javascript:void(0)`">
						<img
							:src="
								`https://img-stg.x2bee.com/${data.contPathNm}`
							"
							alt="img"
						/>
					</a>
				</swiper-slide>
			</swiper>
			<div class="swiper-button-prev banner type02-2" slot="button-prev02-2"></div>
			<div class="swiper-button-next banner type02-2" slot="button-next02-2"></div>
		</div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "goodsSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    cornerData: {
      type: Object,
      defaultValue: undefined,
    },
  },
  data() {
    return {
      bannerSwiperOptions: {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: false,
        navigation: {
          prevEl: ".swiper-button-prev.banner",
          nextEl: ".swiper-button-next.banner",
        },
      },
    };
  },
  methods: {},
  computed: {
    isView() {
      return (this.cornerData?.setList[0]?.contentInfoList[0]?.imageList ?? []).length > 0 
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('~@/assets/slider.scss');
.box-slide {
  .swiper {
		margin-top:36px;
    .swiper-slide {
			border-radius:5px;
			overflow: hidden;
      img {
        display:block;
        width: 100%;
        height:106px;
        object-fit: cover;
      }
      a {
        display:block;
      }
    }
  }
}
</style>
