<template>
  <section class="box-slide" v-if="isView">
    <SectionTitle secTitle="MD’s PICK" />
    <swiper class="swiper" :options="cardSwiperOptions">
      <swiper-slide
        v-for="(data, index) in cornerData.setList"
        v-bind:key="`${index}_${data.id}`"
      >
        <a href="">
          <img
            :src="
              `https://img-stg.x2bee.com/${data}`
            "
            alt="img"
          />
          <div class="text-box">
            <p class="text"></p>
          </div>
        </a>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev type02" slot="button-prev"></div>
    <div class="swiper-button-next type02" slot="button-next"></div>
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
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      },
    };
  },
  methods: {},
  computed: {
    isView() {
      return (this.cornerData?.setList ?? []).length > 0 
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
        width: 100%;
        height:384px;
        object-fit: cover;
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
