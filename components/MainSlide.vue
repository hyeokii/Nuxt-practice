<template>
  <div>
    <Swiper
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
      }"
      type="main"
      perView="1"
      :slideItem="swiperData"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["swiperData"]),
  },
};
</script>

<style></style>
