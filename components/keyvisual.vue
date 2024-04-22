<template>
  <section class="box-slide">
    <swiper class="swiper" :options="kvSwiperOptions">
      <swiper-slide>
        <p>title</p>
        <p>text</p>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "keyvisualComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {},
  data() {
    return {
      kvSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.swiper {
  height: 372px;
}
</style>
