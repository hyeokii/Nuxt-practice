<template>
  <div v-if="res.setList[0].contentInfoList[0]" class="shop-wrapper">
    <div class="shop-title">MD's PICK</div>
    <div class="shop-swiper">
      <Swiper :options="SwiperOptions">
        <SwiperSlide
          v-for="item in res.setList[0].contentInfoList[0].planShopList"
          :key="item.mkdpNo"
        >
          <div class="swiper-link" @click="handleAlert(item.mkdpNo)">
            <img
              class="swiper-image"
              :src="imageUrl(item.imageList[0].bnrImgPathNm)"
            />
            <div class="swiper-des">{{ item.mkdpNm }}</div>
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
          nextEl: ".shop-swiper .swiper-button-next",
          prevEl: ".shop-swiper .swiper-button-prev",
        },
      },
    };
  },

  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
    handleAlert(src) {
      alert(`${src}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-wrapper {
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 40px;
  .shop-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .shop-swiper {
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
          width: 480px;
          .swiper-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .swiper-des {
            color: black;
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
      top: 45%;
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
  .shop-wrapper {
    width: 1280px;
  }
}
</style>
