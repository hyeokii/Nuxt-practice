<template>
  <div class="recent-swiper">
    <p class="recent-title">최신 기획전</p>
    <Swiper :options="SwiperOptions">
      <SwiperSlide :key="item.mkdpNo" v-for="item in data">
        <a href="">
          <PlanCard :plan="item" class="swiper-card"></PlanCard>
        </a>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import PlanCard from "./PlanCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PlanCard,
  },

  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      SwiperOptions: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: ".recent-swiper .swiper-button-next",
          prevEl: ".recent-swiper .swiper-button-prev",
        },
      },
    };
  },
  methods: {
    imageUrl(src) {
      return `https://img-stg.x2bee.com/${src}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.recent-swiper {
  position: relative;
  padding-top: 20px;
  .recent-title {
    font-size: 16px;
  }
  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        width: calc(25% - 18px);
        margin-right: 24px;
        font-size: 14px;
        a {
          text-decoration: none;
          color: black;
        }
        .swiper-card {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
    top: 160px;
  }
  .swiper-button-prev {
    left: -20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .swiper-button-next {
    right: -20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    color: black;
    font-size: 10px;
  }
}
</style>
