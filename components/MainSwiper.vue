<template>
  <div class="main-swiper">
    <Swiper :options="SwiperOptions" ref="mySwiper">
      <SwiperSlide v-for="item in res.setList" :key="item.dispSetSeq">
        <div
          class="swiper-link"
          @click="handleAlert(item.contentInfoList[0].imageList[0].linkUrlAddr)"
        >
          <img
            class="swiper-image"
            :src="imageUrl(item.contentInfoList[0].imageList[0].pcContPathNm)"
          />
          <div class="swiper-text">
            <div
              v-if="item.contentInfoList[1].textList[0]"
              class="swiper-text1"
            >
              {{ item.contentInfoList[1].textList[0].contTitleNm }}
            </div>
            <div
              v-if="item.contentInfoList[1].textList[1]"
              class="swiper-text2"
            >
              {{ item.contentInfoList[1].textList[1].contTitleNm }}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
    <button class="control-play" @click="handleSwiper()">
      <img
        v-if="isPlay"
        src="https://fo.x2bee.com/images/icons/ico_swiper_stop.svg"
      />
      <img v-else src="https://fo.x2bee.com/images/icons/ico_swiper_play.svg" />
    </button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    res: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      SwiperOptions: {
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".main-swiper .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".main-swiper .swiper-button-next",
          prevEl: ".main-swiper .swiper-button-prev",
        },
      },
      isPlay: true,
    };
  },
  computed: {},

  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleAlert(src) {
      alert(`${src}로 이동`);
    },
    handleSwiper() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.$refs.mySwiper.$swiper.autoplay.start();
      } else {
        this.$refs.mySwiper.$swiper.autoplay.stop();
      }
      console.log(this.$refs.mySwiper);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-swiper {
  position: relative;
  margin: 0 auto 80px;
  width: 100%;
  height: 380px;
  .swiper-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .swiper-slide {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .swiper-link {
        cursor: pointer;
        width: 100%;
        height: 100%;
        .swiper-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          .swiper-text1 {
            font-size: 1.875rem;
          }
          .swiper-text2 {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    background-color: black;
    opacity: 0.4;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    opacity: 1;
    color: white;
    font-size: 20px;
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.376rem;
    width: 3rem;
    cursor: pointer;
    border-radius: 10px;
    height: 20px;
    font-size: 13px;
    line-height: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsla(0, 0%, 100%, 0.5);
  }

  .control-play {
    position: absolute;
    left: 50%;
    transform: translate(-300%);
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
}
@media ($desktop) {
  .main-swiper {
    width: 1900px;
  }
}
</style>
