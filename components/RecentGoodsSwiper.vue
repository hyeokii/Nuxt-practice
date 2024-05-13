<template>
  <div class="swiperContainer">
    <swiper ref="mySwiper" class="swiper" :options="{ ...swiperOption }">
      <swiper-slide v-for="(plan, idx) in recentPlanList" :key="idx">
        <PlanCard :plan="plan" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
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
    recentPlanList: { type: Array },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        pagination: "",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiperContainer {
  margin-bottom: 5rem;
  position: relative;
}
.swiper {
  /* height: 330px; */
  width: 1245px;
  position: relative;
  .swiper-slide {
    display: flex;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    opacity: 0.7;
    overflow: hidden;
    cursor: pointer;

    &.swiper-slide-active {
      opacity: 1;
    }

    .planCardContainer {
    }
  }
}

.swiper {
  width: 1280px;
  padding: 0 18px;

  @media (min-width: 1900px) {
    width: 1900px;
  }

  .swiper-slide {
    width: 100%;
  }
}

.swiper-slide {
  opacity: 1;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  z-index: 25;
  top: 45%;
  transform: translateY(-45%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 0 24px;
}

.swiper-button-prev {
  left: -20px;
}

.swiper-button-next {
  right: -20px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 16px;
  color: black;
}
</style>
