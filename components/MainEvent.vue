<template>
  <div class="event-wrapper">
    <div class="event-title">이벤트</div>
    <div class="event-swiper">
      <Swiper :options="SwiperOptions">
        <SwiperSlide
          v-for="item in res.setList[0].contentInfoList[0].imageList"
          :key="item.dispSetSeq"
        >
          <div class="swiper-link" @click="handleAlert(item.linkUrlAddr)">
            <img class="swiper-image" :src="imageUrl(item.contPathNm)" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
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
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".event-swiper .swiper-button-next",
          prevEl: ".event-swiper .swiper-button-prev",
        },
      },
    };
  },
  methods: {
    imageUrl(src) {
      console.log(src);
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleAlert(src) {
      alert(`${src}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.event-wrapper {
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 40px;
  .event-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .event-swiper {
    position: relative;
    margin: 0 auto;
    .swiper-container {
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .swiper-slide {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-link {
          cursor: pointer;
          .swiper-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
    .swiper-button-prev {
      left: -25px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .swiper-button-next {
      right: -25px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      color: black;
      font-size: 20px;
    }
  }
}
@media ($desktop) {
  .event-wrapper {
    width: 1280px;
  }
}
</style>
