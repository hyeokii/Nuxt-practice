<template>
  <div class="thumbnail">
    <!-- <swiper
      class="top-swiper"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
      :modules="modules"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide class="slide" v-for="(item, idx) in goodsDetail" :key="idx">
        <v-img :src="`https://img-stg.x2bee.com/${item.contFilePathNm}`" :alt="item.name" v-if="item.contFilePathNm !== null || item.contFilePathNm !== undefined" />
        <v-img src="" alt="no-image" v-else></v-img>
      </swiper-slide>
    </swiper>
    
    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide class="slide" v-for="(item, idx) in goodsDetail" :key="idx">
        <v-img :src="`https://img-stg.x2bee.com/${item.contFilePathNm}`" :alt="item.name" v-if="item.contFilePathNm !== null || item.contFilePathNm !== undefined" />
        <v-img src="" alt="no-image" v-else></v-img>
      </swiper-slide>
    </swiper> -->
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/snoqualmie_pass_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg)"></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/snoqualmie_pass_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg)"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
// import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: 'thumbnail',
  layout: 'default',
  components: {
    Swiper, 
    SwiperSlide
  },
  data() {
    return {
    swiperOptionTop: {
        notNextTick: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        notNextTick: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  props: {
    goodsDetail: [],
    goodsNo:''
  },
  mounted() {
    const swiperTop = this.$refs.swiperTop.swiper
    const swiperThumbs = this.$refs.swiperThumbs.swiper
    swiperTop.params.control = swiperThumbs
    swiperThumbs.params.control = swiperTop
  }
}
</script>

<style scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>