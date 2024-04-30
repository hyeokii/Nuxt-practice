<template>
  <section v-if="isView">
    <SectionTitle :secTitle="`${cornerData.mappTtl}`" />
    <div class="box-slide type-card">
      <swiper class="swiper" :options="cardSwiperOptions">
        <swiper-slide
        v-for="(data, index) in cornerData.setList[0].contentInfoList[0].planShopList"
          v-bind:key="`${index}_${data.id}`"
        >
          <a :href="`javascript:void(0)`" @click="pdLink(data.brefDesc)">
            <img
              :src="
                `https://img-stg.x2bee.com/${data.imageList[0].bnrImgPathNm}`
              "
              alt="img"
            />
            <div class="text-box">
              <p class="text">{{ data.mkdpNm }}</p>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev type02 md" slot="button-prev02"></div>
      <div class="swiper-button-next type02 md" slot="button-next02"></div>
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
      cardSwiperOptions: {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: false,
        navigation: {
          prevEl: ".swiper-button-prev.md",
          nextEl: ".swiper-button-next.md",
        },
      },
    };
  },
  methods: {
    pdLink(data) {
		alert(`${data}로 이동`)
	},
  },
  computed: {
    isView() {
      return (this.cornerData?.setList[0]?.contentInfoList[0]?.planShopList ?? []).length > 0 
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('~@/assets/slider.scss');
.box-slide {
  .swiper {
    .swiper-slide {
      img {
        display:block;
        width: 100%;
        height:384px;
        object-fit: cover;
      }
      a {
        display:block;
      }
    }
  }
  .text-box {
    margin-top:20px;
    .text {
      font-size:16px;
      line-height:24px;
    }
  }
}
</style>
