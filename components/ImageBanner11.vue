<template>
  <section v-if="isView">
    <SectionTitle :secTitle="`${cornerData.mappTtl}`" />
    <div class="box-slide type-card">
      <swiper class="swiper" :options="brandSwiperOptions">
        <swiper-slide
        v-for="(data, index) in cornerData.setList[0].contentInfoList[0].imageList"
          v-bind:key="`${index}_${data.id}`"
        >
          <a :href="`javascript:void(0)`"  @click="pdLink(data.contTitleNm)">
            <img
              :src="
                `https://img-stg.x2bee.com/${data.contPathNm}`
              "
              alt="img"
            />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev brand type02" slot="button-prev02"></div>
      <div class="swiper-button-next brand type02" slot="button-next02"></div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "brandSwiper",
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
      brandSwiperOptions: {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: false,
        navigation: {
          prevEl: ".swiper-button-prev.brand",
          nextEl: ".swiper-button-next.brand",
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
      return (this.cornerData?.setList[0]?.contentInfoList[0]?.imageList ?? []).length > 0 
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
