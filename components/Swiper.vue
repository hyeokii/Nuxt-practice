<template>
  <div class="swiperContainer">
    <swiper :class="['swiper', type]" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
import "swiper/css/swiper.css";

export default {
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pagination: { type: Object, required: false },
    type: String,
    perView: String,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: this.perView,
        spaceBetween: 30,
        loop: true,
        pagination: this.pagination,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState(["swiperData"]),
  },
};
</script>

<style lang="scss" scoped>
.swiperContainer {
  border: 1px solid black;
  margin-bottom: 5rem;
}
.slider-content {
  padding-bottom: 170px;
}
.slider-wrap {
  h6 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & + .slider-wrap {
    margin-top: 40px;
  }
  &.thumb-example {
    height: 480px;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      margin-top: 20px;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
}
.swiper {
  width: 100%;
  height: 300px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background: #fdde88;
    opacity: 0.7;
    img {
      width: 100%;
    }
    &.swiper-slide-active {
      opacity: 1;
    }
  }
  /* .swiper-pagination {
    bottom: 20px;
    &.num {
      display: inline-block;
      width: auto;
      left: 20px;
      padding: 7px 15px;
      background: #fff;
      border-radius: 20px;
      color: #666;
      .swiper-pagination-current {
        font-weight: 900;
        color: #ff7600;
      }
      .swiper-pagination-total {
        color: #666;
      }
    }
  } */
  .swiper-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: #333;
    .bar {
      width: 100%;
      height: 4px;
      transform: translateX(-100%);
      background: #ff7600;
    }
    &.start {
      .bar {
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-name: progress;
      }
    }
  }
}
.main {
  .swiper-pagination {
    background-color: black;
    color: white;
    .swiper-pagination-current {
      color: white;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: black;
    color: white;
    width: 40px;
    height: 40px;
    opacity: 80%;
    border-radius: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
  }
}

@keyframes progress {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
