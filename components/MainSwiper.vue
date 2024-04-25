<template>
  <section class="full" v-if="isView">
    <div class="box-slide">
      <swiper class="swiper" :options="kvSwiperOptions">
        <swiper-slide
          v-for="(data, index) in cornerData.setList"
          v-bind:key="`${index}_${data.id}`"
        >
          <a :href="`javascript:void(0)`">
            <img
              :src="`https://img-stg.x2bee.com/${data.contentInfoList[0].imageList[0].pcContPathNm}`"
              alt="img"
            />
            <div class="text-box">
              <p class="title">{{ data.contentInfoList[1].textList.at(0)?.contTitleNm }}</p>
              <p class="desc">{{ data.contentInfoList[1].textList.at(1)?.contTitleNm }}</p>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev main type01" slot="button-prev"></div>
      <div class="swiper-button-next main type01" slot="button-next"></div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "MainSwiper",
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
  created() {
    // console.log('data', this.cornerData.setList[0].contentInfoList[1].textList[1].contTitleNm)
  },
  data() {
    return {
      kvSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev.main",
          nextEl: ".swiper-button-next.main",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
    };
  },
  methods: {},
  computed: {
    isView() {
      return (this.cornerData?.setList ?? []).length > 0 && this.cornerData.setList[0].contentInfoList.at(1).textList.length >=2
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('~@/assets/slider.scss');
.box-slide {
  height: 372px;
  .swiper {
    .swiper-slide {
      img {
        height:372px;
      }
    }
  }
  .swiper-pagination {   
    bottom: 20px;    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    width: 48px;
    height: 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    color: white;
  }
  .swiper-btn-prev {
    left:40px;
  }
  .swiper-btn-next {
    right:40px;
  }
  .text-box {
    position:absolute;
    left:50%;
    top:148px;
    transform: translateX(-50%);
    color:white;
    text-align:center;
    .title {
      font-size:30px;
      line-height:36px;
      font-weight: 700;
    }
    .desc {
      font-size:20px;
      line-height:28px;
    }
  }
}
</style>
