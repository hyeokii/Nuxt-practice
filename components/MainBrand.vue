<template>
  <div v-if="res.setList.length" class="brand-wrapper">
    <div class="brand-title">주목해야 할 브랜드</div>
    <div class="brand-swiper">
      <Swiper :options="SwiperOptions">
        <SwiperSlide
          v-for="item in res.setList[0].contentInfoList[0].imageList"
          :key="item.contTitleNm"
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
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: ".brand-swiper .swiper-button-next",
          prevEl: ".brand-swiper .swiper-button-prev",
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
.brand-wrapper {
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 40px;
  .brand-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .brand-swiper {
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
          width: 384px;
          height: 384px;
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
  .brand-wrapper {
    width: 1280px;
  }
}
</style>
