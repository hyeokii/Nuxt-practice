<template>
  <div class="swiperContainer">
    <swiper
      ref="mySwiper"
      :class="['swiper', type]"
      :options="{ ...swiperOption, autoplay: this.autoplay }"
      :isPlaying="isPlaying"
    >
      <swiper-slide v-for="(item, idx) in slideItem" :key="idx">
        <!-- main -->
        <div
          v-if="type === 'main'"
          @click="routeToUrl(item.contentInfoList[0].imageList[0].linkUrlAddr)"
        >
          <img
            class="swiperImg"
            :src="`https://img-stg.x2bee.com/${item.contentInfoList[0].imageList[0].pcContPathNm}`"
          />

          <p
            class="swiperText"
            v-for="(text, idx) in item.contentInfoList[1].textList"
            :key="idx"
          >
            {{ text.contTitleNm }}
          </p>
        </div>

        <!-- mdPick -->
        <div class="mdPickContainer" v-else-if="type === 'mdPick'">
          <img
            class="mdPickImg"
            :src="`https://img-stg.x2bee.com/${item.imageList[0].bnrImgPathNm}`"
          />

          <p class="mdPickText">{{ item.mkdpNm }}</p>
        </div>

        <!-- brand, event -->
        <div v-else @click="routeToUrl(item.linkUrlAddr)">
          <img
            :class="`${type}Img`"
            :src="`https://img-stg.x2bee.com/${item.pcContPathNm}`"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <button
      @click="togglePlay"
      class="swiper-play-pause"
      v-if="type === 'main'"
    >
      {{ isPlaying ? "||" : "&#9654;" }}
    </button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
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
    slideItem: Array,
    loop: Boolean,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: this.perView,
        spaceBetween: 30,
        loop: this.loop,
        pagination: this.pagination,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      isPlaying: true,
    };
  },
  methods: {
    routeToUrl(url) {
      alert(`${url}로 이동`);
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        // 멈춘 상태
        this.$refs.mySwiper.$swiper.autoplay.start();
      } else {
        // 재생 상태
        this.$refs.mySwiper.$swiper.autoplay.stop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.swiperContainer {
  margin-bottom: 5rem;
  position: relative;
}
.swiper {
  height: 330px;
  width: 1245px;
  padding: 0 25px;
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
    img {
      width: 100%;
    }
    &.swiper-slide-active {
      opacity: 1;
    }
  }
}

.main.swiper {
  /* width: 1245px; */
  width: 100vw;
  padding: 0;

  @media (min-width: 1900px) {
    width: 1900px;
  }

  .swiper-slide {
    width: 100%;
  }
}

.mdPick.swiper {
  height: 420px;
}

.event.swiper {
  height: 150px;
}

.main {
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 10px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    width: 60px;
    font-size: 0.8rem;
    color: white;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
  }
}

.brand,
.mdPick,
.event {
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
    margin: 0 25px;
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
}

.swiperImg,
.brandImg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  object-fit: cover;
}

.swiperText {
  position: relative;
  z-index: 20;
  font-size: 2rem;
  color: white;
}

.mdPickContainer {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.mdPickContainer .mdPickImg {
  margin-bottom: 1rem;
}

.mdPickContainer .mdPickText {
  font-weight: 500;
}

.swiper-play-pause {
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 60px);
  bottom: 10px;
  width: 25px;
  height: 25px;
  font-size: 12px;
  cursor: pointer;
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
