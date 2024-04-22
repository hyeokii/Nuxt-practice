<template>
  <div class="swiperContainer">
    <swiper :class="['swiper', type]" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in slideItem" :key="idx"
        ><div
          v-if="type === 'main'"
          @click="routeToUrl(item.contentInfoList[0].imageList[0].linkUrlAddr)"
        >
          <img
            class="swiperImg"
            :src="`https://img-stg.x2bee.com/${item.contentInfoList[0].imageList[0].pcContPathNm}`"
          />

          <p class="swiperText">{{ item.setNm }}</p>
        </div>

        <div class="mdPickContainer" v-else-if="type === 'mdPick'">
          <img
            class="mdPickImg"
            :src="`https://img-stg.x2bee.com/${item.imageList[0].bnrImgPathNm}`"
          />

          <p class="mdPickText">{{ item.mkdpNm }}</p>
        </div>
        <div v-else @click="routeToUrl(item.linkUrlAddr)">
          <img
            class="brandImg"
            :src="`https://img-stg.x2bee.com/${item.pcContPathNm}`"
          />
        </div>
      </swiper-slide>
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
    };
  },
  computed: {
    ...mapState(["swiperData"]),
  },
  methods: {
    routeToUrl(url) {
      alert(`${url}로 이동`);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiperContainer {
  margin-bottom: 5rem;
}
.swiper {
  width: 100%;
  height: 300px;
  position: relative;
  z-index: 10;
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
}
.main {
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 10px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 60px;
    font-size: 0.8rem;
    color: white;
    .swiper-pagination-current {
      color: white;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
  }
}

.brand,
.mdPick {
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
}

.mdPickContainer {
  padding: 1rem;
}

.mdPickContainer .mdPickImg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.mdPickContainer .mdPickText {
  position: relative;
  z-index: 20;
  color: white;
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
